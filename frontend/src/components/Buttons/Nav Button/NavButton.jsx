import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../variables.css";
import styles from "./NavButton.module.css";

function NavButton(props) {
    return (
        <Link to={props.to} className={styles.navButton}>
            {props.label}
        </Link>
    );
}

NavButton.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
};

NavButton.defaultProps = {
    label: "NavButton",
    to: "/",
};

export default NavButton;