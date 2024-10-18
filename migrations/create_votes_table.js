export function up(knex) {
  return knex.schema.createTable("votes", function (table) {
    table
      .integer("suggestion_id")
      .unsigned()
      .references("id")
      .inTable("suggestions")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("timestamp").notNullable().defaultTo(knex.fn.now());
    table.string("email").notNullable().primary();
    table.boolean("optin").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable("votes");
}
