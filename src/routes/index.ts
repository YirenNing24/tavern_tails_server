//** ELYSIA IMPORT */
import type Elysia from "elysia";

//** ROUTE IMPORT */
import auth from "./auth.route";


const routes = (app: Elysia) => {
    auth(app)
}

export default routes