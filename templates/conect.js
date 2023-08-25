const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); // Importa cors
const multer = require('multer'); // Importar multer
const dataBase = require('./database');
const app = express();




// Configura Multer-----> para guardar las imagenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../img/'); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Usa el nombre original del archivo
    }
});

const upload = multer({ storage: storage });
//------------------------------------DEFINIR ESQUEMA MONGOOSE--------------------------------------------------------



// Definir el esquema
const IndumentariaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    img: { type: String, required: true } // Agregar un campo para la ruta de la imagen
}, { collection: 'Indumentaria' });



// Crear el modelo
const Indumentaria = mongoose.model('Indumentaria', IndumentariaSchema);





//---------------------------------CONEXION CON LA BASE DE DATOS----------------------------------------------------

// Conexión a la base de datos
mongoose.connect(dataBase.mongooseConect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a la base de datos: ' + mongoose.connection.name);


    app.use(cors());//CORS


    //-----------------------------GET---------------------------------------------------------


    app.get('/obtener-productos', (req, res) => {
        Indumentaria.find()
            .then((productos) => {
                // Envía los productos como respuesta en formato JSON
                res.json(productos);

            })
            .catch((error) => {
                console.error('Error al obtener productos:', error);
                res.status(500).send('Error al obtener productos');
            });
    });

    //----------------------------POST-------------------------------------------------------------------------/


    // Ruta para manejar la solicitud POST del formulario
    app.post('/guardar-producto', upload.single('img'), (req, res) => {
        // Obtén los datos del formulario
        const titulo = req.body.titulo;
        const precio = req.body.precio;
        const imagenPath = req.file ? req.file.path : null; // Ruta de la imagen
        // Crear un nuevo documento de indumentaria
        const newIndumentaria = new Indumentaria({ titulo, precio, img: imagenPath });
        // Guardar el documento en la base de datos
        newIndumentaria.save()
            .then(() => {
                console.log('Indumentaria guardada correctamente');
                //res.status(200).send('Indumentaria guardada correctamente');
                res.redirect(dataBase.index); // Cambia la URL según tu estructura de archivos
            })
            .catch((error) => {
                console.error('Error al guardar la indumentaria:', error);
                res.status(500).send('Error al guardar la indumentaria');
            });
    });




    //--------------------------------------------------------------------------------------------------------------

    // Importa el modelo Indumentaria
   // const Indumentaria = mongoose.model('Indumentaria');


    
    // Iniciar el servidor
    app.listen(dataBase.port, () => {
        console.log(`Servidor en ejecución en http://localhost:${dataBase.port}`);
    });
}).catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
});



