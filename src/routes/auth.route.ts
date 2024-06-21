//** ELYSIA IMPORT */
import type { Elysia } from "elysia";

//** SCHEMA IMPORT */
import { registrationSchema } from "../user.services/auth.service/auth.schema";

//**SERVICE IMPORT */
import AuthService from "../user.services/auth.service/auth.service";

//** OUTPUT IMPORT */
import { SuccessMessage } from "../config/output";

const auth = (app: Elysia) => {
	app.post('/api/v1/register/tails', async ({ body }): Promise<SuccessMessage> => {
		try {
			const authService: AuthService = new AuthService();
			const output: SuccessMessage = await authService.registerPlayer(body);
			return output;
		} catch (error: any) {
			throw error;
		}
	}, registrationSchema);
}

export default auth;
    