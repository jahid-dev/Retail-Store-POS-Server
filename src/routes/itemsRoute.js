const express = require('express');
const { getAllItems, addItems, editItems, deleteItems } = require('../controllers/itemsController');
const router = express.Router();

router.get('/items/get-all-items', getAllItems)
router.post('/items/add-items',addItems)
router.post('/items/edit-item',editItems)
router.post('/items/delete-item',deleteItems)

module.exports = router;