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
app.get('/shutter/Estandar', (req, res) => {
    res.render('shutterEstandar');
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

/*--------------ENGLISH----------------*/

//Routes

app.get('/contactanos-English', (req, res) => {
    res.render('English/contactanosUSA');
});

app.get('/-English', (req, res) => {
    res.render('English/indexUSA');
});

/*TIPOS DE SHUTTER*/
app.get('/shutter/Corrediza-English', (req, res) => {
    res.render('English/shutterCorredizaUSA');
});
app.get('/shutter/Estandar-English', (req, res) => {
    res.render('English/shutterEstandarUSA');
});
app.get('/shutter/PuertaFrancesa-English', (req, res) => {
    res.render('English/shutterPuertaFrancesaUSA');
});
app.get('/shutter/Arco-English', (req, res) => {
    res.render('English/shutterArcoUSA');
});

/*CONSEJOS*/
app.get('/consejos/consejo-1-English', (req, res) => {
    res.render('English/consejoUnoUSA');
});

app.get('/consejos/consejo-2-English', (req, res) => {
    res.render('English/consejoDos')
});

/*Nosotros*/
app.get('/nosotros/conocenos-English', (req, res) => {
    res.render('English/conocenosUSA');
});

app.get('/nosotros/nuestroEquipo-English', (req, res) => {
    res.render('English/nuestroEquipo')
});

/*Galeria*/
app.get('/galeria-1-English', (req, res) => {
    res.render('English/galeria-1USA');
});

app.get('/galeria-2-English', (req, res) => {
    res.render('English/galeria-2USA');
});

app.get('/galeria-3-English', (req, res) => {
    res.render('English/galeria-3USA');
});

app.get('/galeria-4-English', (req, res) => {
    res.render('English/galeria-4USA');
});

app.get('/galeria-5-English', (req, res) => {
    res.render('English/galeria-5USA');
});

app.get('/galeria-6-English', (req, res) => {
    res.render('English/galeria-6USA');
});

app.get('/galeria-7-English', (req, res) => {
    res.render('English/galeria-7USA');
});

app.get('/galeria-8-English', (req, res) => {
    res.render('English/galeria-8USA');
});

app.get('/galeria-9-English', (req, res) => {
    res.render('English/galeria-9USA');
});

app.get('/galeria-10-English', (req, res) => {
    res.render('English/galeria-10USA');
});

app.get('/galeria-11-English', (req, res) => {
    res.render('English/galeria-11USA');
});

app.get('/galeria-12-English', (req, res) => {
    res.render('English/galeria-12USA');
});

app.get('/galeria-13-English', (req, res) => {
    res.render('English/galeria-13USA');
});

app.get('/galeria-14-English', (req, res) => {
    res.render('English/galeria-14USA');
});



//Static Files
app.use(express.static(path.join(__dirname + '/public')));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});