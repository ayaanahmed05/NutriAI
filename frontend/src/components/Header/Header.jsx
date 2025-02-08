import styles from "./Header.module.css";
import PrimaryButton from "../Buttons/Primary Button/PrimaryButton";
import NavButton from "../Buttons/Nav Button/NavButton";

function Header() {
    const navButtons = [
        { label: "Home", to: "/" },
        { label: "Meal Plans", to: "/meal-plans" },
        { label: "Grocery List", to: "/grocery-list" },
        { label: "Nutrition Guide", to: "/nutrition" },
    ];

    const isLoggedIn = false;

    return (
        <nav className={styles.headerContainer} aria-label="Main Navigation">
            <div>
                <p className={styles.companyName}>NutriAI</p>
            </div>

            <ul className={styles.navButtonsContainer}>
                {navButtons.map((button, index) => (
                    <li key={index}>
                        <NavButton label={button.label} to={button.to} />
                    </li>
                ))}

                {isLoggedIn ? (
                    <li>
                        <p>Logged in</p>
                    </li>
                ) : (
                    <li>
                        <PrimaryButton label="Sign In" />
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Header;