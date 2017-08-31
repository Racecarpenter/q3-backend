exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.integer('height');
    table.integer('weight');
    table.string('sex');
    table.integer('age');
    table.integer('workoutfreq')
    table.float('bmr');
  })
};

exports.down = function(knex, Promise) {

};
