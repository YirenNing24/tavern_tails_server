//** ROUTE IMPORT */
import auth from "./auth.route";


const routes = (app: any) => {
    auth(app)
}

export default routes