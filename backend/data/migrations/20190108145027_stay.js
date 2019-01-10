exports.up = function(knex, Promise) {
  return knex.schema.createTable('stay', (table) => {
    table
      .increments('id')
      .unique()
      .primary();
    table.integer('guest_id').unsigned();
    table
      .foreign('guest_id')
      .references('user.id')
      .onDelete('CASCADE');
    table.integer('house_id').unsigned();
    table.foreign('house_id').references('house.id');
    table.integer('extra_guests');
    table.date('check_in');
    table.date('check_out');
    table.string('url_id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stay');
};
