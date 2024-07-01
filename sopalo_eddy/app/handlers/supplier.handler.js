const Supplier = require('../models/Supplier');

//Crear una funcion para llamado a select del modelo
//Envia parametros req, res
//req significa request = peticion
//res significa response - respuesta
const listSupplier = async (req, res) => {
    try {
        //Llamado a la funcion de select
        const supplier = await Supplier.getAll();
        res.json(supplier);//Parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.insert(req.body);
        //201 para crear
        res.status(201).json(supplier)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.update(req.body, req.params.id);
        //201 para crear
        res.json(supplier)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.delete(req.params.id);
        //201 para crear
        res.json(supplier)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listSupplier,
    insertSupplier,
    updateSupplier,
    deleteSupplier,
}