const express = require('express');
const { chargeBill, getAllBills } = require('../controllers/billController');
const router = express.Router();

router.post('/bills/charge-bill',chargeBill)
router.get('/bills/get-all-bills',getAllBills)


module.exports = router;