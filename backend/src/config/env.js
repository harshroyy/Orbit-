// Bring in the dotenv library (it reads the .env file)
import dotenv from 'dotenv';

// Load everything from the .env file into process.env
dotenv.config();

// Save the values we need in one object called ENV
// If PORT is missing, we use 5001 as default
export const ENV = {
    PORT : process.env.PORT  || 5001,   // port number
    MONGO_URI : process.env.MONGO_URI,  // database link
    NODE_ENV : process.env.NODE_ENV,     // mode (development / production)
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    SENTRY_DSN: process.env.SENTRY_DSN,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY
}
