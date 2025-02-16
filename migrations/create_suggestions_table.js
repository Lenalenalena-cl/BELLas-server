export function up(knex) {
  return knex.schema.createTable("suggestions", function (table) {
    table.increments("id").primary();
    table.timestamp("timestamp").notNullable().defaultTo(knex.fn.now());
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("suggestion").notNullable();
    table.integer("votes").unsigned().notNullable().defaultTo(0);
  });
}

export function down(knex) {
  return knex.schema.dropTable("suggestions");
}
