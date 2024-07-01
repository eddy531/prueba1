const { Model } = require('objection'); //Llamar a Model de la libreria 

class Supplier extends Model { //Creo herencia del modelo
    static get tableName() {
        return 'supplier';
    }
    static get jsonSchema() {//Especifica la estructura de la tabla
        return {
            type: 'object',//Object para un valor, array para una lista
            required: ['name', 'email'],//Campos requeridos

            properties: {//estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string' },
                email: { type: 'string', format: 'email' },
                fono: { type: 'string' }
            }
        };
    }

    static async getAll() {//Metodo para listar clientes
        return await Supplier.query();//Select*from Supplier
    }

    static async insert(data) {//Metodo para insertar clientes
        return await Supplier.query().insert(data);
    }

    static async update(data, id) {//Metodo para editar cliente
        return await Supplier.query().patch(id, data);//Update set data where id=0
    }
    static async delete(id) {//Metodo para eliminar cliente
        return await Supplier.query().deleteById(id);
    }
}
module.exports = Supplier;