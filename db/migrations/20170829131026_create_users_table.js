exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.float('height');
    table.float('weight');
    table.string('sex');
    table.integer('pushups');
    table.integer('situps');
    table.integer('plank_secs');
  })
};

exports.down = function(knex, Promise) {

};
