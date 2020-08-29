exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Melon', description: 'Fresh', price: 100 },
        { name: 'Uvas', description: 'Fresh', price: 200 },
        { name: 'Manzana', description: 'Fresh', price: 300 },
      ]);
    });
};
