import SquareCard from "../Cards/Square Card/SquareCard";
import styles from "./NutritionGuide.module.css";

function NutritionGuide() {
    return (
        <div className={styles.background}>
            <div>
                <h1>Nutrition Guide</h1>
            </div>
            <div className={styles.cardContainer}>
                <SquareCard />
                <SquareCard />
                <SquareCard />
            </div>
        </div>
    );
}

export default NutritionGuide;