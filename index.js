// Importar express y otros módulos necesarios
const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');

const app = express();

// Configuración
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

// Rutas
app.use('/', routes);

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});
