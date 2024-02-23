const express = require('express')
const app = express()
const cors = require('./middlewares/cors')
const { mongoose } = require('mongoose');
const session = require('./middlewares/session');
const router = require('./routes');
// const { connectionString } = require('./strings.js');


const initDB = () => mongoose.connect('mongodb://127.0.0.1:27017/destinations-forum')


startServer()
async function startServer() {
    initDB();
    app.use(express.json())
    app.use(cors())
    app.use(session())
    //trimBody
    app.use(router)

    app.listen('3030', () => console.log(`REST service started at 3030`))

}
