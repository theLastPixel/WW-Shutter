//Requires
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
// const http = require('http');

//Initializations
const app = express();
app.use(expressLayout);
const hostname = '127.0.0.1';
const port = 3000;

//Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });


//Settings
app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname) + '/views');
app.set('view engine', 'ejs');

//MiddleWares

//Global Variables

//Routes
app.get('/catalogo', (req, res) => {
    res.render('catalogo');
});

app.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

app.get('/', (req, res) => {
    res.render('index');
});

/*TIPOS DE SHUTTER*/
app.get('/shutter/Corrediza', (req, res) => {
    res.render('shutterCorrediza');
});
app.get('/shutter/Estandard', (req, res) => {
    res.render('shutterEstandard');
});
app.get('/shutter/PuertaFrancesa', (req, res) => {
    res.render('shutterPuertaFrancesa');
});
app.get('/shutter/Arco', (req, res) => {
    res.render('shutterArco');
});

/*CONSEJOS*/
app.get('/consejos/consejo-1', (req, res) => {
    res.render('consejoUno');
});

app.get('/consejos/consejo-2', (req, res) => {
    res.render('consejoDos')
});

/*Nosotros*/
app.get('/nosotros/conocenos', (req, res) => {
    res.render('conocenos');
});

app.get('/nosotros/nuestroEquipo', (req, res) => {
    res.render('nuestroEquipo')
});

/*Galeria*/
app.get('/galeria-1', (req, res) => {
    res.render('galeria-1');
});

app.get('/galeria-2', (req, res) => {
    res.render('galeria-2');
});

app.get('/galeria-3', (req, res) => {
    res.render('galeria-3');
});

app.get('/galeria-4', (req, res) => {
    res.render('galeria-4');
});

app.get('/galeria-5', (req, res) => {
    res.render('galeria-5');
});

app.get('/galeria-6', (req, res) => {
    res.render('galeria-6');
});

app.get('/galeria-7', (req, res) => {
    res.render('galeria-7');
});

app.get('/galeria-8', (req, res) => {
    res.render('galeria-8');
});

app.get('/galeria-9', (req, res) => {
    res.render('galeria-9');
});

app.get('/galeria-10', (req, res) => {
    res.render('galeria-10');
});

app.get('/galeria-11', (req, res) => {
    res.render('galeria-11');
});

app.get('/galeria-12', (req, res) => {
    res.render('galeria-12');
});

app.get('/galeria-13', (req, res) => {
    res.render('galeria-13');
});

app.get('/galeria-14', (req, res) => {
    res.render('galeria-14');
});


//Static Files
app.use(express.static(path.join(__dirname + '/public')));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});