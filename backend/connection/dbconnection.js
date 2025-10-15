const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  "Expense_table", 
  "root", "1234567890",
{
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
