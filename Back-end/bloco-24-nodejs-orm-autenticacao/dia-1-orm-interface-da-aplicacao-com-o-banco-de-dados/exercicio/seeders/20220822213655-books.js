'use strict';

module.exports = {
  up: async(queryInterface) => {
    await queryInterface.bulkInsert('Books',
      [{
        title: 'Qualquer título: o primeiro',
        author: 'Author A',
        page_quantity: 1000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Qualquer título: o segundo',
        author: 'Author B',
        page_quantity: 2000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Qualquer título: o terceiro',
        author: 'Author C',
        page_quantity: 3000,
        created_at: new Date(),
        updated_at: new Date(),
      }]
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
