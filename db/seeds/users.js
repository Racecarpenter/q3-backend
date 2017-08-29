exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Race',
          height: 1.88,
          weight: 102.058,
          sex: "male",
          pushups: 150,
          situps: 200,
          plank_secs: 300
        },
        {
          id: 2,
          username: 'butthead',
          height: 1.5,
          weight: 105,
          sex: "female",
          pushups: 80,
          situps: 225,
          plank_secs: 100
        }
      ]);
  });
};
