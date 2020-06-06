import Knex from 'knex';

export async function up(knex: Knex) {

  //? Cria Tabela
  return knex.schema.createTable('points', table => {

    //? Campo ID primario
    table.increments('id').primary();

    //? Campo String
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();

    //? Campo Decimal
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex) {

  //? Deleta Tabela
  return knex.schema.dropTable('point');
}
