const express = require('express');
const { generateMealPlan } = require('../controllers/mealPlanController');
const router = express.Router();

// POST route for generating meal plans
router.post('/generate', (req, res, next) => {
    console.log('POST /api/meal-plans/generate hit'); // Debugging log
    next();
}, generateMealPlan);

// Export the router
module.exports = router;