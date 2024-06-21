//* ELYSIA
import Elysia from "elysia";
import { cors } from '@elysiajs/cors'


const app = new Elysia()

.use(cors({
  origin: ['http://localhost:8085'],
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
}))

export default app