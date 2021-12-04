"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Productos",
      [
        {
          codigo: "123",
          marca: "Ricolino",
          descripcion: "Panditas",
          precio: "$15.00",
          categoria: "dulces",
        },
        {
          codigo: "456",
          marca: "Sabritas",
          descripcion: "Rufles",
          precio: "$17.00",
          categoria: "Papitas",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Productos", null, {});
  },
};
