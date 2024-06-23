import rt from "rethinkdb";
import { getRethinkDB } from "../db/rethink";

// Replace this array with your actual data
const tableNames: string[] = ["playerData", "playerStats", "playerCurrency", "playerTavern"];

const createDatabaseAndTables = async (): Promise<void> => {
  try {
    const connection: rt.Connection = await getRethinkDB();

    // Create the 'players' and 'chats' databases
    await rt.dbCreate('players').run(connection);
    await rt.dbCreate('chats').run(connection);

    // Use the 'players' database
    for (const tableName of tableNames) {
        await rt
            .db('players')
            .tableCreate(tableName, { primary_key: "username" })
            .run(connection);
        console.log(`Table '${tableName}' created with 'username' as primary key.`);
    }

    console.log('Database and tables created successfully.');

  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

// Run the function
createDatabaseAndTables();
