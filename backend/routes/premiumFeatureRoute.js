const express=require('express');

const premiumFeatureController=require('../controller/premiumFeatureController');

const authenticatemiddleware =require('../middlewares/auth');

const router=express.Router();

router.get('/showLeaderBoard', authenticatemiddleware.authenticate,premiumFeatureController.getUserLeaderBoard);

module.exports=router;
