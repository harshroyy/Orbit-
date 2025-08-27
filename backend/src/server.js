// Bring in the express library (it helps us create a web server)
import express from 'express'

// Bring in our settings (like port number, database link, etc.)
import {ENV} from './config/env.js'

// Make a new express app (our web server)
const app = express();

// When someone goes to "http://localhost:PORT/"
// send back "Hello World! 123" as the response
app.get("/" , (req, res) => {
    res.send("Hello World! 123");
});

// Just print the database link on the console (for checking)
console.log("mongo uri :" ,ENV.MONGO_URI);

// Start the server on the given port number
// and show a message when it has started
app.listen(ENV.PORT , () => console.log("Server started on port : ", ENV.PORT));
