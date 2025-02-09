import { useState } from "react";
import styles from "./MealPlanForm.module.css";
import PrimaryButton from "../Buttons/Primary Button/PrimaryButton";

function MealPlanForm() {
    const [dietaryPreferences, setDietaryPreferences] = useState("");
    const [calorieGoal, setCalorieGoal] = useState("");
    const [mealPlan, setMealPlan] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3001/api/meal-plans/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dietaryPreferences,
                    calorieGoal: parseInt(calorieGoal, 10),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMealPlan(data.mealPlan);
            } else {
                setError(data.error || "Failed to generate meal plan.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.headerContainer}>
                <h1>Generate Your Meal Plan</h1>
            </div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="dietaryPreferences">Dietary Preferences:</label>
                    <input
                        type="text"
                        id="dietaryPreferences"
                        value={dietaryPreferences}
                        onChange={(e) => setDietaryPreferences(e.target.value)}
                        required
                        placeholder="e.g., Vegan"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="calorieGoal">Calorie Goal:</label>
                    <input
                        type="number"
                        id="calorieGoal"
                        value={calorieGoal}
                        onChange={(e) => setCalorieGoal(e.target.value)}
                        required
                        placeholder="e.g., 2000"
                    />
                </div>
                <div className={styles.submitButtonContainer}>
                    <PrimaryButton
                        label={loading ? "Generating..." : "Generate"}
                    />
                </div>
            </form>

            {error && <p className={styles.errorMessage}>{error}</p>}
            {mealPlan && (
                <div className={styles.resultContainer}>
                    <h2>Your Meal Plan:</h2>
                    <pre className={styles.mealPlan}>{mealPlan}</pre>
                </div>
            )}
        </div>
    );
}

export default MealPlanForm;