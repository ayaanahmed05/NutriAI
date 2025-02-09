const { generateResponse } = require('../utils/aiHelper');

const generateMealPlan = async (req, res) => {
    const { dietaryPreferences, calorieGoal, mealsPerDay } = req.body;
    if (!dietaryPreferences || !calorieGoal || !mealsPerDay) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const prompt = `
        Generate a ${mealsPerDay}-meal plan for someone with:
        - Dietary Preferences: ${dietaryPreferences}
        - Calorie Goal: ${calorieGoal} calories.
    `;

    try {
        const response = await generateResponse('gpt2', prompt);
        res.status(200).json({ mealPlan: response.generated_text });
    } catch (error) {
        res.status(500).json({ error: 'Error generating meal plan' });
    }
};

module.exports = { generateMealPlan };