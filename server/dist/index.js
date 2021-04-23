'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// App Setup
app.use((0, _cors2.default)({
    origin: ['http://localhost:3000']
}));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '../../docs')));
app.get('/', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, '../../docs', 'index.html'));
});
console.log(__dirname);
console.log(_path2.default.join(__dirname, '../../docs'));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../../docs', 'index.html'));
// })
// Server Setup
var port = process.env.PORT || 8000;
_http2.default.createServer(app).listen(port, function () {
    console.log('\x1B[32m', 'Server listening on: ' + port, '\x1B[0m');
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
//# sourceMappingURL=index.js.map