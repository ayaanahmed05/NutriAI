const { generateResponse } = require('../utils/aiHelper'); // Import generateResponse

const generateMealPlan = async (req, res) => {
    const { dietaryPreferences, calorieGoal } = req.body;

    console.log("Request Body:", req.body); // Debugging log

    if (!dietaryPreferences || !calorieGoal) {
        console.log("Missing required fields");
        return res.status(400).json({
            error: 'Missing required fields. Please provide dietaryPreferences and calorieGoal.'
        });
    }

    const prompt = `
        Create a 3-meal plan with healthy and simple meals. 
        Follow these preferences: ${dietaryPreferences}, calorie goal: ${calorieGoal}.

        Just simply tell me the name of the meal, and its ingredients. 

        Breakfast: Provide a healthy breakfast option.
        Lunch: Provide a healthy lunch option.
        Dinner: Provide a healthy dinner option.
    `;
    console.log("Generated Prompt:", prompt); // Debugging log

    try {
        const response = await generateResponse('microsoft/Phi-3.5-mini-instruct', prompt);

        if (!response || !response[0]?.generated_text) {
            console.error("Invalid response from the API:", response);
            return res.status(500).json({ error: "Failed to generate meal plan" });
        }

        const generatedText = response[0].generated_text;
        console.log("Raw Generated Text:", generatedText); // Debugging log

        // Extract and filter out placeholder text
        const mealPlan = generatedText
            .split('\n')
            .filter(line => 
                line.toLowerCase().includes('breakfast:') ||
                line.toLowerCase().includes('lunch:') ||
                line.toLowerCase().includes('dinner:')
            )
            .filter(line => !line.includes('Provide a healthy')) // Filter out placeholder values
            .join('\n');

        console.log("Processed Meal Plan:", mealPlan);
        res.status(200).json({ mealPlan });
    } catch (error) {
        console.error("Error in API call:", error.message);
        res.status(500).json({ error: "Error generating meal plan" });
    }
};

module.exports = { generateMealPlan };