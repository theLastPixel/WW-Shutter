//Requires
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

//Initializations
const app = express();
app.use(expressLayout);

//Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname) + '/views');
app.set('view engine', 'ejs');

//MiddleWares

//Global Variables

//Routes
app.get('/catalogo', (req, res) => {
    res.render('catalogo');
});

app.get('/conocenos', (req, res) => {
    res.render('conocenos');
});

app.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

app.get('/', (req, res) => {
    res.render('index');
});

/*TIPOS DE SHUTTER*/
app.get('/ShutterCorrediza', (req, res) => {
    res.render('ShutterCorrediza');
});
app.get('/ShutterEstandar', (req, res) => {
    res.render('ShutterEstandar');
});
app.get('/ShutterPuertaFrancesa', (req, res) => {
    res.render('ShutterPuertaFrancesa');
});
app.get('/ShutterArco', (req, res) => {
    res.render('ShutterArco');
});

//Static Files
app.use(express.static(path.join(__dirname + '/public')));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});