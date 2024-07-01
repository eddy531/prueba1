/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('sale', function (table) {
        table.integer('fkid_customer').unsigned().notNullable();
        table.foreign('fkid_customer').references('id').inTable('customer').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table('sale', function (table) {
        table.dropForeign(['fkid_customer']);
        table.dropColumn(['fkid_customer']);
    });
};
