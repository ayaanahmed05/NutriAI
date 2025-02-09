const express = require('express');
const { generateGroceryList } = require('../controllers/groceryListController');
const router = express.Router();

router.post('/generate', generateGroceryList);

module.exports = router;