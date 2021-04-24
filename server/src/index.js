import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
const app = express();
// App Setup
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '../../docs')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../docs', 'index.html'));
// });
console.log(__dirname)
console.log(path.join(__dirname, '../../docs'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../docs', 'index.html'));
// })

// if(process.env.NODE.ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../../docs')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../../docs', 'index.html'))
//     });
// }

// Server Setup
const port = process.env.PORT || 8000
http.createServer(app).listen(port, ()=>{
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});
// import express from 'express';
// import http from 'http';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import cors from 'cors';

// const app = express();

// // App Setup
// app.use(cors({
//     origin: ['https://www.amazingandyyy.com', 'http://localhost:3000']
// }));
// app.use(morgan('dev'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}));
// app.get('/', (req, res) => res.json({'source': 'https://github.com/amazingandyyy/mern'}))

// app.use((err, req, res, next) => {
//     console.log('Error:', err.message);
//     res.status(422).json(err.message);
// });

// // Server Setup
// const port = process.env.PORT || 8000
// http.createServer(app).listen(port, ()=>{
//     console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
// });
