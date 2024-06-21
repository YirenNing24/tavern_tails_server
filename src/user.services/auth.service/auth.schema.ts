import { t } from "elysia";



/**
 * Schema for validating the body of a user registration request.
 *
 * @type {Object}
 * @property {Object} body - The body of the request.
 * @property {string} body.userName - The username for registration.
 * @property {string} body.password - The password for registration.
 */
export const registrationSchema = { 
    body: t.Object({ 
        username: t.String(), 
        password: t.String(), 
    })
}
