import styles from "./Header.module.css";
import PrimaryButton from "../Buttons/Primary Button/PrimaryButton";
import NavButton from "../Buttons/Nav Button/NavButton";

function Header() {
    const navButtons = ["Home", "Meal Plans", "Grocery List", "Nutrition Guide"];
    const isLoggedIn = false;

    return (
        <nav className={styles.headerContainer} aria-label="Main Navigation">
            <div>
                <p className={styles.companyName}>NutriAI</p>
            </div>

            <ul className={styles.navButtonsContainer}>
                {navButtons.map((arrayItem, index) => (
                    <li key={index}>
                        <NavButton label={arrayItem} />
                    </li>
                ))}

                {isLoggedIn ? <li><p>Logged in</p></li> : <li><PrimaryButton label="Sign In" /></li>}
            </ul>
        </nav>
    );
}

export default Header;