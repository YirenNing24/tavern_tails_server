

// API Configuration
export const API_PREFIX: string = process.env.API_PREFIX || '/api';
export const APP_PORT: number = Number(process.env.APP_PORT) || 3000;
export const API_KEY: string | undefined = process.env.API_KEY;
export const API_ID: string | undefined = process.env.API_ID;
export const HOST: string = process.env.HOST || 'localhost';
export const JWT_SECRET: string = process.env.JWT_SECRET || 'a secret key';

// RethinkDB Configuration
export const RDB_DATABASE: string = process.env.RDB_DATABASE || ""
export const RDB_PORT: number = Number(process.env.RDB_PORT) || 28015;

// KeyDB Configuration
export const KEYDB_PASSWORD: string | undefined = process.env.KEYDB_PASSWORD;
export const KEYDB_PORT: string | undefined = process.env.KEYDB_PORT;
export const KEYDB_HOST: string | undefined = process.env.KEYDB_HOST;

export const KDB: { host: string | undefined; port: string | number; password: string | undefined } = {
  host: process.env.KEYDB_HOST,
  port: process.env.KEYDB_PORT || 6379,
  password: process.env.KEYDB_PASSWORD,
};

// Thirdweb SDK Configuration
export const SECRET_KEY: string = process.env.SECRET_KEY || ""

export const CATNIP_TOKEN: string = '0xaADF62cd6517E88C612890434866056751E8e849';

export const PRIVATE_KEY: string  = process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""

export const GOOGLE_CLIENT_ID: string  = process.env.GOOGLE_CLIENT_ID || ""
export const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || ""

export const ENGINE_ACCESS_TOKEN: string = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweEM4RmIxNUVkQTQ1OUJlQWJlNjgwMTE2NzFCMjUxNzYyZkU1QzlCMzMiLCJzdWIiOiIweDBBZkYxMEEyMjIwYWEyN2ZCZTgzQzY3NjkxM2FlYmViMzgwMURmQjYiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ4NzI1NTk4OTYsIm5iZiI6MTcxODk1OTg5NiwiaWF0IjoxNzE4OTU5ODk2LCJqdGkiOiI1NTAzZWE1My01ZWQ4LTRlMTctYjc4Zi1lM2VlODAxNTQ2OGMiLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHhhYmJmOGRiNDEzNjQ0ODY2NGIxNDFmZWE5NjM5MWQ1NjkwODY1NjI3NWVmYzc5NzYxMGU5NmZiODM0MGQzYWJlMTUwZTQ1ZDA5NGFiMDk5ZmRhNGJhY2Y1OTRkYTU2MTEzYmI0ZTEwNmRhMTViMDYwNjliYmFlZGIwNDVjM2RmODFi"