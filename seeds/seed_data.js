exports.seed = function(knex, Promise) {
    return Promise.all([
            Promise.all([
                knex('gig_posters').del()
            ])
            .then(function() {
                knex('gig_seekers').del();
            })
            .then(function() {
                knex('gigs').del();
            })
            .then(function() {
                knex('gig_app_table').del();
            })

        ])
        .then(function() {
            return Promise.all([
                knex('gig_posters').insert({ first_name: 'Onofre', last_name: "Echeverria", phone_number: "619-940-8675", email: "ono@ono.com", location: 'San Pablo, CA', username: "ono", password: "123" }),
                knex('gig_posters').insert({ first_name: 'Mike', last_name: "Hemp", phone_number: "760-940-8675", email: "mikeo@ono.com", location: 'Fallbrook, CA', username: "mike", password: "123" }),
                knex('gig_posters').insert({ first_name: 'Ana', last_name: "Zeu", phone_number: "805-940-8675", email: "ana@hotmail.com", location: 'San Diego, CA', username: "ana", password: "456" })

            ])
        })
        .then(function() {
            return Promise.all([
                knex('gig_seekers').insert({ first_name: 'Kevin', last_name: "Echeverr", phone_number: "760-940-8675", email: "ono@onos.com", location: "Fallbrook, CA", summary_skills: "Intelligent, responsible, able to think outside the box", languages: "English", username: "Kevin", password: "123455" }),
                knex('gig_seekers').insert({ first_name: 'Luis', last_name: "Vargas", phone_number: "951-940-8675", email: "luis@yahoo.com", location: "Ontario, CA", summary_skills: "Accounting major with 5 years of experience.", languages: "Spanish", username: "luis223", password: "123" }),
                knex('gig_seekers').insert({ first_name: 'Mario', last_name: "Mejia", phone_number: "805-940-8675", email: "mario@onos.com", location: "Santa Barbara, CA", summary_skills: "Math major background with experience working as a teacher.", languages: "English, Spanish", username: "mario@mario.com", password: "123" })

            ])
        })
        .then(function() {
            return Promise.all([
                knex('gigs').insert({ first_name: "Mark", last_name: "Hawk", gig_location: "San Francisco, CA", gig_amount: 100, gig_posting_date: "1/20/2016", gig_reply_email: "ono@ono.com", gig_poster_confirmation: true, gig_poster_id: 1, gig_description: "Wash car and dog", gig_lang_accepted: "English" }),
                knex('gigs').insert({ first_name: "Kevin", last_name: "Holmes", gig_location: "Oxnard, CA", gig_amount: 300, gig_posting_date: "09/20/2016", gig_reply_email: "mikeo@ono.com", gig_poster_confirmation: false, gig_poster_id: 2, gig_description: "buy groceries for me", gig_lang_accepted: "Espanol" }),
                knex('gigs').insert({ first_name: "David", last_name: "Velasco", gig_location: "San Francisco", gig_amount: 100, gig_posting_date: "1/20/2016", gig_reply_email: "ana@hotmail.com", gig_poster_confirmation: true, gig_poster_id: 3, gig_description: "Clean backyard for me.", gig_lang_accepted: "English and Spanish" })
            ]);
        })
        .then(function() {
            return Promise.all([
                knex('gig_app_table').insert({ gig_seeker_id: 1, gig_text: "IDK", gig_accepted: true }),
                knex('gig_app_table').insert({ gig_seeker_id: 2, gig_text: "Yeah", gig_accepted: false }),
                knex('gig_app_table').insert({ gig_seeker_id: 3, gig_text: "No", gig_accepted: true })
            ]);
        })
        .then(function() {
            return Promise.all([
                knex('users').insert({ username: "onofre", password: '1234444', email: 'ono@ono.com', zip: 92028 }),
                knex('users').insert({ username: "bbuenrostro", password: '123456789', email: 'bb@ono.com', zip: 94806 }),
                knex('users').insert({ username: "ekevin45", password: '3691224', email: 'kevin@fajita.com', zip: 92028 })
            ]);
        })
};
