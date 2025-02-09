const { generateResponse } = require('../utils/aiHelper'); // Import generateResponse

const generateMealPlan = async (req, res) => {
    // Destructure fields from the request body
    const {
        dietaryPreferences,
        calorieGoal,
        mealsPerDay,
        monthlyBudget,
        householdSize,
        preferredStores,
        allergies,
        cuisine
    } = req.body;

    console.log("Request Body:", req.body); // Debugging log

    // Validate required fields
    if (!dietaryPreferences || !calorieGoal || !mealsPerDay || !monthlyBudget || !householdSize) {
        console.log("Missing required fields");
        return res.status(400).json({
            error: 'Missing required fields. Please provide dietaryPreferences, calorieGoal, mealsPerDay, monthlyBudget, and householdSize.'
        });
    }

    // Generate the prompt for the AI model
    const prompt = `
        Meal Preferences: ${dietaryPreferences}
        Calorie Goal: ${calorieGoal} calories
        Meals Per Day: ${mealsPerDay}
        Monthly Budget: $${monthlyBudget}
        Household Size: ${householdSize} people
        Preferred Stores: ${preferredStores ? preferredStores.join(', ') : 'None specified'}
        Allergies or Dislikes: ${allergies ? allergies.join(', ') : 'None'}
        Cuisine Preference: ${cuisine || 'Any'}
    `;
    console.log("Generated Prompt:", prompt); // Debugging log

    try {
        // Use the Hugging Face model to generate a response
        const response = await generateResponse('Kagz/meal-planner-pro', prompt);

        // Check if the response is valid
        if (!response || !response[0]?.generated_text) {
            console.error("Invalid response from Hugging Face API:", response);
            return res.status(500).json({ error: "Failed to generate meal plan" });
        }

        const generatedText = response[0].generated_text;
        console.log("Raw Generated Text:", generatedText); // Debugging log

        // Process the generated text to clean up the output
        const mealPlan = generatedText
            .split('\n') // Split into lines
            .filter(line => line.trim().length > 0) // Remove empty lines
            .slice(0, mealsPerDay) // Take the number of meals requested
            .join('\n'); // Join the lines back into a single string

        console.log("Processed Meal Plan:", mealPlan); // Debugging log
        res.status(200).json({ mealPlan });
    } catch (error) {
        console.error("Error in API call:", error.message); // Log the error
        res.status(500).json({ error: "Error generating meal plan" });
    }
};

module.exports = { generateMealPlan };