const express = require('express');
const mealPlanRoutes = require('./src/routes/mealPlanRoutes');
const groceryListRoutes = require('./src/routes/groceryListRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// API routes
app.use('/api/meal-plans', mealPlanRoutes);
app.use('/api/grocery-lists', groceryListRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('NutriAI Backend API is running...');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));