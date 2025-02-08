import SquareCard from "../Cards/Square Card/SquareCard";
import styles from "./NutritionGuide.module.css";

function NutritionGuide() {
    const cardData = [
        {
            header: "Healthy Eating Tips",
            bodyText: "Discover practical and easy ways to improve your eating habits every day. These tips are tailored to your lifestyle and focus on small, sustainable changes that can make a big difference in your health without feeling overwhelming or restrictive.",
        },
        {
            header: "Meal Planning Made Easy",
            bodyText: "Simplify your meal preparation with AI-powered planning tools. Get personalized meal plans designed for your dietary preferences, health goals, and daily schedule, helping you eat healthier while saving time and effort in the kitchen. Eating smarter has never been easier.",
        },
        {
            header: "Understanding Nutritional Labels",
            bodyText: "Gain confidence in grocery shopping by learning how to decode nutritional labels. Understand portion sizes, ingredients, and calorie counts to make informed choices about the food you buy. This knowledge empowers you to select options that align with your health and wellness goals.",
        },
        {
            header: "Hydration Habits",
            bodyText: "Hydration is key to maintaining energy and focus throughout the day. Discover practical tips to increase your water intake, track hydration levels, and stay hydrated even on busy days. A well-hydrated body supports better digestion, concentration, and overall health.",
        },
        {
            header: "Balanced Diet Essentials",
            bodyText: "A balanced diet includes a variety of nutrients essential for your body's needs. Learn about key food groups, portion control, and how to create meals that provide energy, improve immunity, and support long-term health without compromising on flavor or enjoyment.",
        },
    ];

    return (
        <div className={styles.background}>
            <div className={styles.headerContainer}>
                <h1>Nutrition Guide</h1>
            </div>
            <div className={styles.cardContainer}>
                {cardData.map((card, index) => (
                    <SquareCard 
                        key={index} 
                        header={card.header} 
                        bodyText={card.bodyText} 
                    />
                ))}
            </div>
        </div>
    );
}

export default NutritionGuide;