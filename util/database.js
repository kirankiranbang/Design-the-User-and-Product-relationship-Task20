const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sept@45454545', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
