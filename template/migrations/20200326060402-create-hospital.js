'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hospitals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING(1000)
      },
      city: {
        type: Sequelize.STRING
      },
      link_map: {
        type: Sequelize.STRING(1000)
      },
      suspect_total: {
        type: Sequelize.INTEGER
      },
      suspect_quota: {
        type: Sequelize.INTEGER
      },
      hotline: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hospitals');
  }
};