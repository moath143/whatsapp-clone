import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import Dotenv from 'dotenv'
import Routes from './router/Route.js'
Dotenv.config();
const app = express()
const PORT = process.env.PORT || 8080
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

// app.get('/', (req, res) => {
//     res.status(200).send('hello new world')
// })
app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", Routes);

Connection(username, password);



app.listen(PORT, () => {
    console.log(`the server is running at ${PORT} on localhost:${PORT}`);
})