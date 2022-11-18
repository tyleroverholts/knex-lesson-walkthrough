/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('pet', table => {
    table.integer('pet_food_type_id');
    table.foreign('pet_food_type_id').references('pet_food_type.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('pet', table => {
    table.dropForeign('pet_food_type_id');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('pet')
    });
};
