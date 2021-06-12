const restaurantes = require('./restaurantes.routes');
const mesas = require('./mesas.routes');
const clientes = require('./clientes.routes');
const reservas = require('./reservas.routes');
const categoriaProductos = require('./categoria-productos.routes');
const productos = require('./productos.routes');

module.exports = app => {
    app.use('/api/mesas', mesas);
    app.use('/api/clientes', clientes);
    app.use('/api/reservas', reservas);
    app.use('/api/restaurantes', restaurantes);
    app.use('/api/categoriaProductos', categoriaProductos);
    app.use('/api/productos', productos);
    return app;
}