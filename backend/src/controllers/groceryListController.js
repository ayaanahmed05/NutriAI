const { generateResponse } = require('../utils/aiHelper');

const generateGroceryList = async (req, res) => {
    const { mealPlan } = req.body;

    if (!mealPlan) {
        return res.status(400).json({ error: 'Missing meal plan input' });
    }

    const prompt = `
        Create a grocery shopping list for the following meal plan:
        ${mealPlan}
    `;

    try {
        const response = await generateResponse('gpt2', prompt);
        res.status(200).json({ groceryList: response.generated_text });
    } catch (error) {
        res.status(500).json({ error: 'Error generating grocery list' });
    }
};

module.exports = { generateGroceryList };