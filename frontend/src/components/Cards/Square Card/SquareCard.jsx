import styles from "./SquareCard.module.css";
import PropTypes from "prop-types";

function SquareCard(props) {
    // debug for props
    // console.log("Header:", props.header, "BodyText:", props.bodyText);

    return (
        <div className={styles.cardContainer}>
            <p className={styles.header}>{props.header}</p>
            <p className={styles.bodyText}>{props.bodyText}</p>
        </div>
    );
}

SquareCard.defaultProps = {
    header: "Lorem, ipsum.",
    bodyText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sit ad aliquid eius fugit, odit velit assumenda amet adipisci accusamus temporibus sequi magnam quod."
};

SquareCard.propTypes = {
    header: PropTypes.string,
    bodyText: PropTypes.string
};

export default SquareCard;