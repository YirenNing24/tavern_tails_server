import app from "./app";
import { APP_PORT } from "./config/constants";


const port: number = APP_PORT;
const hostname: string = 'localhost'

app.listen({ port }, () => {
    console.log(`Tails tavern server is running on port http://${hostname}:${port}/`);
    }
);
