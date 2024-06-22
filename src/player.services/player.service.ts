//** RETHINKDB IMPORT */
import rt, { type Connection } from "rethinkdb";
import { getRethinkDB } from "../db/rethink";

//** INTERFACE IMPORT */
import type { PlayerStats } from "./player.interface";
import { playerLevel, playerStatPoints, playerCurrency } from "./player.create";

/**
 * Class for player services, handling creation and initial setup of player data.
 */
class PlayerServices {
    /**
     * Creates a new player with the provided username.
     * @param {string} username - The username of the new player.
     * @returns {Promise<void>}
     * @throws Will throw an error if the player creation fails.
     */
    public async createPlayer(username: string): Promise<void> {
        try {
            const newPlayer: PlayerStats = {
                username,
                playerLevel,
                playerStatPoints,
            };

            const connection: Connection = await getRethinkDB();
            await rt
                .db('players')
                .table('playerStats')
                .insert(newPlayer)
                .run(connection);

            await this.setInitialCurrency(username);

        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    /**
     * Sets the initial currency for the new player.
     * @param {string} username - The username of the new player.
     * @returns {Promise<void>}
     * @throws Will throw an error if setting the initial currency fails.
     */
    private async setInitialCurrency(username: string): Promise<void> {
        try {
            const newPlayerCurrency = { ...playerCurrency, username };

            const connection: Connection = await getRethinkDB();
            await rt
                .db('players')
                .table('playerCurrency')
                .insert(newPlayerCurrency)
                .run(connection);

        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }
}

export default PlayerServices;
