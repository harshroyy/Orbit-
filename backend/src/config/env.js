// Bring in the dotenv library (it reads the .env file)
import dotenv from 'dotenv';

// Load everything from the .env file into process.env
dotenv.config();

// Save the values we need in one object called ENV
// If PORT is missing, we use 5001 as default
export const ENV = {
    PORT : process.env.PORT  || 5001,   // port number
    MONGO_URI : process.env.MONGO_URI,  // database link
    NODE_ENV : process.env.NODE_ENV     // mode (development / production)
}
