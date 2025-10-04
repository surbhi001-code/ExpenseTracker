const express=require('express');

const userController=require('../controller/userController');

const router=express.Router();

router.post('/signup',userController.addUser);

module.exports=router;