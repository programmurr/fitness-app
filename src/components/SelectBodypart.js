import styles from "../styles/select-bodypart.module.css";
import formStyles from "../styles/forms.module.css";

export default function SelectBodyPart(props) {
  return (
    <div className={styles.selectBodyPartContainer}>
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Select body part</label>
        <select
          className={formStyles.selectInput}
          value={props.selectedBodyPart}
          onChange={props.handleBodyPartChange}
        >
          <option value="select">Select</option>
          {props.allBodyParts.map((bodyPart, index) => (
            <option key={`${bodyPart}${index}`} value={bodyPart}>
              {bodyPart}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
