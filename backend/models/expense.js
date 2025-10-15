const { Sequelize} = require('sequelize');
const sequelize = require('../connection/dbconnection'); 

const Expense = sequelize.define('expenses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expenseamount: Sequelize.INTEGER,
    category: Sequelize.STRING,
    description: Sequelize.STRING,
})

module.exports = Expense;