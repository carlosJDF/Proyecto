'use strict'
 
var mongoose = require('mongoose')
var app = require('./app')
var port = 8000


// conexion  a BD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/proyectoG', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("La conexión a la base de datos se ha realizado correctamente")

        //crear servidor
        app.listen(port, () => {
            console.log("Servidor corriendo en http://localhost:8000");
        });
    })
    
    .catch(err => console.log(err));    

    