const express = require('express');
const { generateGroceryList } = require('../controllers/groceryListController');
const router = express.Router();

// POST route for generating grocery lists
router.post('/generate', (req, res, next) => {
    console.log('POST /api/grocery-lists/generate hit'); // Debugging log
    next();
}, generateGroceryList);

// Export the router
module.exports = router;