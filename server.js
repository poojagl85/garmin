const express = require('express');
const app = express();
const landing = require('./controllers/landing.js');
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use('/', landing);

const PORT = process.env.PORT || 8080;
app.listen(8080, console.log(`The server is started on PORT : ${PORT}`));