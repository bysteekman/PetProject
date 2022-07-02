const router = require('express').Router();

const transactions = require('./Transactions.ts');

router.use('/transactions', transactions);

module.exports = router;