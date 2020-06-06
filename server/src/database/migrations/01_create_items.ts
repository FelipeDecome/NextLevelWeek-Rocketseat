import Knex from 'knex';

export async function up(knex: Knex) {

  //? Cria Tabela
  return knex.schema.createTable('items', table => {

    //? Campo ID primario
    table.increments('id').primary();

    //? Campo String
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {

  //? Deleta Tabela
  return knex.schema.dropTable('items');
}
