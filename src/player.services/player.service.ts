//** RETHINKDB IMPORT */
import rt, { Cursor, type Connection } from "rethinkdb";
import { getRethinkDB } from "../db/rethink";

//** INTERFACE IMPORT */
import type { PlayerStats } from "./player.interface";
import { playerLevel, playerStatPoints, playerCurrency } from "./player.create";



class PlayerServices {
    public async createplayer(username: string): Promise<void> {
        try {

            const newPlayer: PlayerStats = {
                username,
                playerLevel,
                playerStatPoints,
                playerCurrency
            }
            // Get a connection to RethinkDB
            const connection: Connection = await getRethinkDB();
            await rt
            .db('players')
            .table('playerStats')
            .insert(newPlayer)
            .run(connection);

        } catch(error: any) {
            console.log(error)
            throw error
        }

    } 


}

export default PlayerServices