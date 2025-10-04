const express=require("express");
const userRoute=require('./routes/userRoutes');
const app=express();
const PORT=3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoute);



app.listen(PORT,()=>{
    console.log("Server running!");
})