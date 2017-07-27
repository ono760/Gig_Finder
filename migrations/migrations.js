exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('gig_posters', function(table) {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('phone_number', 20);
      table.string('email').unique();
      table.string('location');
      table.string('username');
      table.string('password');
    }),
    knex.schema.createTable('gig_seekers', function(table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('phone_number', 20);
      table.string('email');
      table.string('location');
      table.string('summary_skills');
      table.string('languages');
      table.string('username');
      table.string('password');
      table.timestamps();
    })
  ]).then(function() {
    return knex.schema.createTable('gigs', function(table) {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('gig_location');
      table.integer('gig_amount');
      table.string('gig_posting_date');
      table.string('gig_reply_email'); //.references('email').inTable('gig_posters').onDelete('cascade'); //reference gig poster mail
      table.boolean('gig_poster_confirmation');
      table.integer('gig_poster_id').references('id').inTable('gig_posters').onDelete('cascade'); //should reference poster id.
      table.string('gig_description').unique();
      table.string('gig_lang_accepted');
      table.string('spanish_gigs');
      table.string('english_gigs');
      table.timestamps();
    });
  }).then(function() {
    return knex.schema.createTable('gig_app_table', function(table) {
      table.increments('id').primary();
      table.integer('gig_seeker_id').references('id').inTable('gig_seekers').onDelete('cascade');
      table.string('gig_text');
      table.boolean('gig_accepted');
    });
  }).then(function() {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
      table.string('email');
      table.integer('zip');
    });
  });
};
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('gig_posters'),
    knex.schema.dropTable('gig_seekers'),
    knex.schema.dropTable('gigs'),
    knex.schema.dropTable('gig_app_table'),
    knex.schema.dropTable('users')
  ]);
};