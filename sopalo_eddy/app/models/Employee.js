const { Model } = require('objection'); //Llamar a Model de la libreria 

class Employee extends Model { //Creo herencia del modelo
    static get tableName() {
        return 'employee';
    }
    static get jsonSchema() {//Especifica la estructura de la tabla
        return {
            type: 'object',//Object para un valor, array para una lista
            required: ['name', 'position'],//Campos requeridos

            properties: {//estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string' },
                email: { type: 'string', format: 'email' },
                position: { type: 'string' },
                salary: { type: 'number' }
            }
        };
    }

    static async getAll() {//Metodo para listar clientes
        return await Employee.query();//Select*from Employee
    }

    static async insert(data) {//Metodo para insertar clientes
        return await Employee.query().insert(data);
    }

    static async update(data, id) {//Metodo para editar cliente
        return await Employee.query().patch(id, data);//Update set data where id=0
    }
    static async delete(id) {//Metodo para eliminar cliente
        return await Employee.query().deleteById(id);
    }
}
module.exports = Employee;