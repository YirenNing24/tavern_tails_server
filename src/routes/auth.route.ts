//** ELYSIA IMPORT */
import type { Elysia } from "elysia";

//** SCHEMA IMPORT */
import { loginSchema, registrationSchema } from "../user.services/auth.service/auth.schema";

//**SERVICE IMPORT */
import AuthService from "../user.services/auth.service/auth.service";

//** OUTPUT IMPORT */
import { SuccessMessage } from "../config/output";
import type { SafeUserData } from "../user.services/auth.service/auth.interface";

const auth = (app: Elysia) => {
	app.post('/api/v1/register/tails', async ({ body }): Promise<SuccessMessage> => {
		try {
			const authService: AuthService = new AuthService();
			const output: SuccessMessage = await authService.registerPlayer(body);
            
			return output;
		} catch (error: any) {
			throw error;
		}
	}, registrationSchema )

    .post('/api/v1/login/tails', async ({ body }): Promise<SafeUserData> => {
		try {
			const authService: AuthService = new AuthService();
			const output: SafeUserData = await authService.loginPlayer(body);

			return output;
		} catch (error: any) {
			throw error;
		}
	}, loginSchema )
}

export default auth;
