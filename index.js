const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./rutas/InvRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas
app.use('/api/inventario', todoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

