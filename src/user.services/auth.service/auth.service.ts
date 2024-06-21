//**THIRDWEB IMPORT */
import { Engine } from "@thirdweb-dev/engine";

//**CONFIG IMPORT */
import { ENGINE_ACCESS_TOKEN } from "../../config/constants";

//**RETHINKDB IMPORT */
import rt, { Cursor, type Connection } from "rethinkdb";
import { getRethinkDB } from "../../db/rethink";

//**ARGON2 IMPORT */
import { hash, verify } from "argon2";

//**INTERFACE IMPORT */
import type { LoginData, RegistrationData, SafeUserData, UserData } from "./auth.interface";
import { SuccessMessage } from "../../config/output";

class AuthService {

    /**
     * Registers a new player with the given registration data.
     * @param {RegistrationData} registrationData - The data required for player registration.
     * @throws Will throw an error if registration fails.
     * @returns {SuccessMessage} - returns a successful message
     */
    public async registerPlayer(registrationData: RegistrationData): Promise<SuccessMessage> {
        try {
            const { username, password } = registrationData;

            const hashedPassword: string = await hash(password);

            const usedUsername: boolean = await this.checkUsername(username);

            if (usedUsername) {
                throw new Error("Username is already used")
            }

            // Create a new wallet for the player
            const walletAddress: string = await this.createPlayerWallet(username);

            // Construct the new player data
            const newPlayer: UserData = { 
                username,
                hashedPassword,
                walletAddress,
                accountType: "tails",
                createdAt: Date.now()
            };

            // Get a connection to RethinkDB
            const connection: Connection = await getRethinkDB();

            // Insert the new player data into the 'playerData' table in the 'beats' database
            await rt
                .db('players')
                .table('playerData')
                .insert(newPlayer)
                .run(connection);

            return new SuccessMessage("Registration successful");
        } catch (error: any) {
            console.error("Error registering player:", error);
            throw error;
        }
    }

    /**
     * Creates a new wallet for the player using Thirdweb's engine.
     * @param {string} username - The username of the player.
     * @returns {Promise<string>} - A promise that resolves to the new wallet's address.
     * @throws Will throw an error if wallet creation fails.
     */
    private async createPlayerWallet(username: string): Promise<string> {
        try {
            const engine = new Engine({
                url: "http://localhost:3005",
                accessToken: ENGINE_ACCESS_TOKEN,
                
            });

            // Create a new backend wallet with the player's username as the label
            const wallet = await engine.backendWallet.create({ label: username });

            // Extract the wallet address from the response
            const { walletAddress } = wallet.result;

            return walletAddress as string;
        } catch (error: any) {
            console.error("Error creating player wallet:", error);
            throw error;
        }
    }

    /**
     * Checks if a username already exists in the database.
     * @param {string} username - The username to check for availability.
     * @returns {Promise<boolean>} - Returns `true` if the username exists, `false` otherwise.
     * @throws Will throw an error if the operation fails.
     */
    private async checkUsername(username: string): Promise<boolean> {
        try {
            const connection: Connection = await getRethinkDB();

            // Check if the username already exists in the database
            const cursor: Cursor = await rt
            .db('players')
            .table('playerData')
            .filter({ username })
            .run(connection);
            const existingUser: UserData | null = await cursor.next();

            if (existingUser) {
                return true
            }

        return false
        } catch(error: any) {
            console.log(error)
            throw error
        }
    }

    /**
     * Logs in a player with the given login data.
     * @param {LoginData} loginData - The data required for player login.
     * @throws Will throw an error if login fails.
     * @returns {SafeUserData} - The safe user data excluding sensitive information.
     */
    public async loginPlayer(loginData: LoginData): Promise<SafeUserData> {
        try {
            const { username, password } = loginData;

            // Get a connection to RethinkDB
            const connection: Connection = await getRethinkDB();

            // Retrieve the user data from the database
            const user = await rt
                .db('players')
                .table('playerData')
                .filter({ username })
                .run(connection);

            // Check if user exists
            if (!user) {
                throw new Error("User not found");
            }

            const { hashedPassword, ...safeProperties  } = await user.next() as unknown as UserData
            const isPasswordValid: boolean = await verify(hashedPassword, password);

            if (!isPasswordValid) {
                throw new Error("Incorrect password");
            }

            return safeProperties as SafeUserData;
        } catch (error: any) {
            console.error("Error logging in player:", error);
            throw error;
        }
    }
}

export default AuthService;
