/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 exports.up = function (knex) {
    return knex.schema
      .createTable('types', (table) => {
        table.increments('id').primary();
        table.string('type').notNullable();
        table.string('type_name').notNullable();
        table.string('description',1000).notNullable();
        table.string('trait',1000).notNullable();
        table.string('career',1000).notNullable();
        table.string('image').notNullable();
      })
    }
      exports.down = function (knex) {
        return knex.schema.dropTable('types');
      };