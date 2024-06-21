//**THIRDWEB IMPORT */
import { Engine } from "@thirdweb-dev/engine";

//**CONFIG IMPORT */
import { ENGINE_ACCESS_TOKEN } from "../../config/constants";

//**INTERFACE IMPORT */
import type { RegistrationData } from "./auth.interface";

class AuthService {


    public async registerPlayer(registrationData: RegistrationData) {
        try {

            const { username, password, accountType } = registrationData;
            const walletAddress: string = await this.createPlayerWallet(username);

            const newPlayer: RegistrationData = { 
                username,
                password,
                walletAddress,
                accountType,
                createdAt: Date.now()
                
            }

            

        } catch(error: any) {
            console.log(error)
            throw error
        }
    }

    private async createPlayerWallet(username: string): Promise<string> {
        try {

            const engine = new Engine({
                url: "http://0.0.0.0:3005",
                accessToken: ENGINE_ACCESS_TOKEN,
              });

            const wallet = await engine.backendWallet.create({ label: username });

            const { walletAddress } = wallet.result



            return walletAddress
        } catch(error: any) {
            console.log(error)
            throw error
        }
    }



}

export default AuthService


