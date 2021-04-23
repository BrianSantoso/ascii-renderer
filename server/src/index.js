import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
// App Setup
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

// Server Setup
const port = process.env.PORT || 8000
http.createServer(app).listen(port, ()=>{
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});
