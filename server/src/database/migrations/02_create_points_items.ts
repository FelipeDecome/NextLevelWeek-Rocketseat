import Knex from 'knex';

export async function up(knex: Knex) {

  //? Cria Tabela
  return knex.schema.createTable('point_items', table => {

    //? Campo ID primario
    table.increments('id').primary();

    //? Campo String
    table.integer('point_id')
      .notNullable()        //? Foreign Key
      .references('id')     //? Campo
      .inTable('points');   //? Tabela

    table.integer('item_id')
      .notNullable()        //? Foreign Key
      .references('id')     //? Campo
      .inTable('items');    //? Tabela
  });
}

export async function down(knex: Knex) {

  //? Deleta Tabela
  return knex.schema.dropTable('point_items');
}
