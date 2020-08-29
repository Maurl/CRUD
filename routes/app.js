// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let ProductsController = require('../controllers/ProductsController');

// Establece que al hacer una petición GET a la ruta / se conteste

router.get('/', ProductsController.homepage);

// Identifica la ruta /products/create y la envía al controlador
router.get('/products/create', ProductsController.create);

// Almacena el producto
router.post('/products', ProductsController.store);

// Implementa ver el detalle de un producto
router.get('/products/:id', ProductsController.show);

// Implementa editar un producto
router.get('/products/:id/edit', ProductsController.edit);

// Maneja la actualización del producto
router.put('/products/:id', ProductsController.update);

// Elimina el producto
router.delete('/products/:id', ProductsController.delete);

// Exporta las configuraciones
module.exports = router;