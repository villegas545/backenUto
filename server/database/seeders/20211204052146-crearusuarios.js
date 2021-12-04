"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nombre: "Julio",
          usuario: "Villegas",
          contra: "0123456789",
        },
        {
          nombre: "Cesar",
          usuario: "Venzor",
          contra: "9876543210",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
