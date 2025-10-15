const express=require("express");
const path=require('path');
var cors=require('cors');
const db=require('./connection/dbconnection');


const User=require('./models/users');
const Expense=require('./models/expense');
const Order=require('./models/order');

const userRoutes=require('./routes/userRoutes');
const expenseRoutes=require('./routes/expenseRoutes');
const purchaseRoutes=require('./routes/purchaseRoute');
const premiumFeatureRoutes=require('./routes/premiumFeatureRoute');

const app=express();
const dotenv=require('dotenv');

dotenv.config();

app.use(cors());

//Middlewares
app.use(express.json());

app.use('/user',userRoutes);
app.use('/expense',expenseRoutes);
app.use('/purchase',purchaseRoutes);
app.use('/premium',premiumFeatureRoutes);

//Associations
User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

db.sync()
    .then(() => {
        app.listen(3000,()=>console.log('Server Started!'));
        })
        .catch(err=>{
            console.log(err);
        })
    
