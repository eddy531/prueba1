const Sale = require('../models/Sale');

//Crear una funcion para llamado a select del modelo
//Envia parametros req, res
//req significa request = peticion
//res significa response - respuesta
const listSale = async (req, res) => {
    try {
        //Llamado a la funcion de select
        const sale = await Sale.getAll();
        res.json(sale);//Parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertSale = async (req, res) => {
    try {
        const sale = await Sale.insert(req.body);
        //201 para crear
        res.status(201).json(sale)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateSale = async (req, res) => {
    try {
        const sale = await Sale.update(req.body, req.params.id);
        //201 para crear
        res.json(sale)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteSale = async (req, res) => {
    try {
        const sale = await Sale.delete(req.params.id);
        //201 para crear
        res.json(sale)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listSale,
    insertSale,
    updateSale,
    deleteSale,
}