const Employee = require('../models/Employee');

//Crear una funcion para llamado a select del modelo
//Envia parametros req, res
//req significa request = peticion
//res significa response - respuesta
const listEmployee = async (req, res) => {
    try {
        //Llamado a la funcion de select
        const employee = await Employee.getAll();
        res.json(employee);//Parsea a json y retorna la respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertEmployee = async (req, res) => {
    try {
        const employee = await Employee.insert(req.body);
        //201 para crear
        res.status(201).json(employee)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.update(req.body, req.params.id);
        //201 para crear
        res.json(employee)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.delete(req.params.id);
        //201 para crear
        res.json(employee)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listEmployee,
    insertEmployee,
    updateEmployee,
    deleteEmployee,
}