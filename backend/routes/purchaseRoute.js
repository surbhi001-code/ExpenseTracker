const express = require('express');

const purchaseController = require('../controller/purchaseController');

const authenticatemiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/premiummembership', authenticatemiddleware.authenticate,purchaseController.purchasepremium);

router.post('/updatetransactionstatus', authenticatemiddleware.authenticate, purchaseController.updateTransactionStatus)

module.exports = router;