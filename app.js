const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Configurar el motor de plantillas EJS

app.use(express.static('public')); // Archivos estáticos

app.get('/', (req, res) => {
  res.render('index'); // Renderizar la página principal (index.ejs)
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

