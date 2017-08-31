exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.integer('height');
    table.integer('weight');
    table.string('sex');
    table.integer('age');
    table.integer('workoutfreq')
  })
};

exports.down = function(knex, Promise) {

};
