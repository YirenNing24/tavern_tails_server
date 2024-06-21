//* ELYSIA
import Elysia from "elysia";
import { cors } from '@elysiajs/cors';

// Import your route handlers
import routes from "./routes";

// Initialize Elysia app
const app = new Elysia()
	.use(cors({
		origin: ['http://localhost:8088'],
		methods: ["GET", "POST", "HEAD", "PUT", "OPTIONS"],
		allowedHeaders: [
			"content-Type",
			"authorization",
			"origin",
			"x-Requested-with",
			"accept",
		],
		credentials: true,
		maxAge: 600,
	}));

// Register your routes
routes(app)


export default app;
