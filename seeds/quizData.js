/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//  .createTable('types', (table) => {
//   table.increments('id').primary();
//   table.string('type').notNullable();
//   table.string('type_name').notNullable();
//   table.string('description').notNullable();
//   table.string('trait').notNullable();
//   table.string('career').notNullable();
//   table.string('image').notNullable();
// })

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('types').del()
  await knex('types').insert([
    {
      type: 'ISTJ',
      type_name: 'INSPECTOR',
      description:'People with this personality generally appear serious and formal. They usually love traditions and believe in values like honor, hard work and social responsibility. They are typically reserved, quiet, calm and upright. At work, they are known for being responsible and reliable. They thrive in an organized workplace and prefer to have rules laid out for them. They like to use analytical and critical thought and are highly detail-oriented.',
      trait:JSON.stringify(["Decisive","Detail-oriented", "Reliable", "Persistent","Logical"]),
      career:JSON.stringify(["Dentist", "Certified public accountant", "Supply chain managers",  "Bank teller",  "Military officer",  "Inspector", "Lawyer", "Civil engineer", "Actuary", "Executive Consultant", "Financial analyst", "Actuary", "Bailiff",  "Investigator", "Forensic psychologist", "Secretary", "Judge", "Program administrator", "Executive assistant", "Support specialist", "Auditor", "Budget analyst", "Financial controller"]),
      image:"",      
    }
  ]);
};
