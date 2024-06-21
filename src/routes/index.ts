import auth from "./auth.route";


const routes = (app: any) => {
    app.use(auth)
}

export default routes