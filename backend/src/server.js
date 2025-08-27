import express from 'express'
import {ENV} from './config/env.js'
import {connectDB} from './config/db.js'

// Make a new express app (our web server)
const app = express();

app.get("/" , (req, res) => {
    res.send("Hello World! 123");
});

app.listen(ENV.PORT , () => {
    console.log("Server started on port : ", ENV.PORT);
    connectDB();
});