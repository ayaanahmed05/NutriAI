import styles from "./HeroSection.module.css";
import HeroLogo from "../../assets/Hero-Logo.svg";
import PrimaryButton from "../Buttons/Primary Button/PrimaryButton.jsx";
import SecondaryButton from "../Buttons/Secondary Button/SecondaryButton.jsx";

function HeroSection() {
    return (
        <div className={styles.background}>
            <div className={styles.contentContainer}>
                <h1>The Smartest Way to Plan Your Nutrition</h1>
                <p>NutriAI generates personalized meal plans and smart grocery lists using AI, making healthy eating effortless and optimized for your goals.</p>

                <div className={styles.buttonContainer}>
                    <PrimaryButton label="Get Started" />
                    <SecondaryButton label="Learn More" />
                </div>
            </div>
            <div className={styles.illustration}>
                <img src={HeroLogo} alt="NutriAI Illustration" />
            </div>
        </div>
    );
}

export default HeroSection;