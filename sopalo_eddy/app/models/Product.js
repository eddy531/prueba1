const { Model } = require('objection'); //Llamar a Model de la libreria 

class Product extends Model { //Creo herencia del modelo
    static get tableName() {
        return 'product';
    }
    static get jsonSchema() {//Especifica la estructura de la tabla
        return {
            type: 'object',//Object para un valor, array para una lista
            required: ['name', 'price'],//Campos requeridos

            properties: {//estructura de los campos
                id: { type: 'integer' },
                name: { type: 'string' },
                price: { type: 'number' },
                stock: { type: 'integer' }
            }
        };
    }

    static async getAll() {//Metodo para listar clientes
        return await Product.query();//Select*from Product
    }

    static async insert(data) {//Metodo para insertar clientes
        return await Product.query().insert(data);
    }

    static async update(data, id) {//Metodo para editar cliente
        return await Product.query().patch(id, data);//Update set data where id=0
    }
    static async delete(id) {//Metodo para eliminar cliente
        return await Product.query().deleteById(id);
    }
}
module.exports = Product;