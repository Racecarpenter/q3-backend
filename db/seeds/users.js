exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Race',
          height: 74,
          weight: 220,
          sex: "male",
          age: 25,
          workoutfreq: 6,
          bmr: null
        }
      ]);
  });
};
