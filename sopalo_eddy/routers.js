const express = require('express'); // Llamando al framework

//Llamar a handlers del api
const customerHandler = require('./app/handlers/customer.handler');
//Llamar a handlers del api
const productHandler = require('./app/handlers/product.handler');
//Llamar a handlers del api
const employeeHandler = require('./app/handlers/employee.handler');
//Llamar a handlers del api
const supplierHandler = require('./app/handlers/supplier.handler');
//Llamar a handlers del api
const saleHandler = require('./app/handlers/sale.handler');

//Variable para encapsular rutas
const router = express.Router();

//Registrar las rutas`
// rutas de customer
router.get('/customers', customerHandler.listCustomer)//Obtener cliente
router.post('/customers', customerHandler.insertCustomer)//Insertar Cliente
router.patch('/customers/:id', customerHandler.updateCustomer)//Actualizar cliente
router.delete('/customers/:id', customerHandler.deleteCustomer)//Eliminar cliente

//Registrar las rutas`
// rutas de product
router.get('/products', productHandler.listProduct)//Obtener cliente
router.post('/products', productHandler.insertProduct)//Insertar Cliente
router.patch('/products/:id', productHandler.updateProduct)//Actualizar cliente
router.delete('/products/:id', productHandler.deleteProduct)//Eliminar cliente

//Registrar las rutas`
// rutas de product
router.get('/employees', employeeHandler.listEmployee)//Obtener cliente
router.post('/employees', employeeHandler.insertEmployee)//Insertar Cliente
router.patch('/employees/:id', employeeHandler.updateEmployee)//Actualizar cliente
router.delete('/employees/:id', employeeHandler.deleteEmployee)//Eliminar cliente

//Registrar las rutas`
// rutas de product
router.get('/suppliers', supplierHandler.listSupplier)//Obtener cliente
router.post('/suppliers', supplierHandler.insertSupplier)//Insertar Cliente
router.patch('/suppliers/:id', supplierHandler.updateSupplier)//Actualizar cliente
router.delete('/suppliers/:id', supplierHandler.deleteSupplier)//Eliminar cliente

//Registrar las rutas`
// rutas de product
router.get('/sales', saleHandler.listSale)//Obtener cliente
router.post('/sales', saleHandler.insertSale)//Insertar Cliente
router.patch('/sales/:id', saleHandler.updateSale)//Actualizar cliente
router.delete('/sales/:id', saleHandler.deleteSale)//Eliminar cliente

//Otras rutas ...
module.exports = router;













