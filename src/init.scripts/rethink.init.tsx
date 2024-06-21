//** RETHINK DB
import rt from "rethinkdb";
import { getRethinkDB } from "../db/rethink";


// Replace this array with your actual data
const tableNames: string[] = ["playerData", "playerStats"];

const createDatabaseAndTables = async (): Promise<void> => {
  try {
    const connection: rt.Connection = await getRethinkDB();

    // Create the 'players' database
    await rt.dbCreate('players').run(connection);

    // Use the 'players' database
    for (const tableName of tableNames) {
        if (tableName === 'playerStats') {
            await rt
                .db('players')
                .tableCreate(tableName, {primary_key: "username"}) // Set 'username' as the primary key for 'playerStats'
                .run(connection);
            console.log(`Table '${tableName}' created with 'username' as primary key.`);
        } else {
            await rt
                .db('players')
                .tableCreate(tableName)
                .run(connection);
            console.log(`Table '${tableName}' created.`);
        }
    }

    console.log('Database and tables created successfully.');

  } catch (error: any) {
    console.error('Error:', error.message);
  }
}


// Run the function
createDatabaseAndTables();
