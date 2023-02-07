'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post_emotions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emotion: {
        type: Sequelize.ENUM,
        values: [
          'LOVE',
          'CLAP',
          'THUMBS_UP',
          'THUMBS_DOWN'
      ],
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
    await queryInterface.dropTable('post_emotions');
  }
};