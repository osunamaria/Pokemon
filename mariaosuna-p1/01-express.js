const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('dotenv').config()

const port = process.env.PORT || 3000

//Conexión a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dzv3t.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; //URL de conexión, que completaremos luego
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

//Llamadas a las rutas
app.use('/', require('./router/rutas'));
//app.use('/bienvenida', require('./router/rutas'));//?????
app.use('/pokemon', require('./router/pokemon'));
app.use('/entrenador', require('./router/entrenador'));

app.use((req, res) => {
    res.status(404).render("404", {
        titulo: "Error 404",
        descripcion: "Página no encontrada"
    })
})

app.listen(port, () => {
    console.log(`Se está lanzando en el puerto ${port}`)
})