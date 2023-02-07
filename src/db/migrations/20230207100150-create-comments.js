'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          key:"id",
          model:"users"
        },
        onDelete:"CASCADE",
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          key:"id",
          model:"posts"
        },
        onDelete:"CASCADE",
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};