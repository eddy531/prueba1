const { Model } = require('objection'); //Llamar a Model de la libreria 

class Sale extends Model { //Creo herencia del modelo
    static get tableName() {
        return 'sale';
    }
    static get jsonSchema() {//Especifica la estructura de la tabla
        return {
            type: 'object',//Object para un valor, array para una lista
            required: ['total'],//Campos requeridos

            properties: {//estructura de los campos
                id: { type: 'integer' },
                total: { type: 'number' },
                customer: { type: 'string' }
            }
        };
    }

    static async getAll() {//Metodo para listar clientes
        return await Sale.query();//Select*from Sale
    }

    static async insert(data) {//Metodo para insertar clientes
        return await Sale.query().insert(data);
    }

    static async update(data, id) {//Metodo para editar cliente
        return await Sale.query().patch(id, data);//Update set data where id=0
    }
    static async delete(id) {//Metodo para eliminar cliente
        return await Sale.query().deleteById(id);
    }
}
module.exports = Sale;