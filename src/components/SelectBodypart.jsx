import styles from "../styles/select-bodypart.module.css";
import formStyles from "../styles/forms.module.css";
export default function SelectBodyPart({ selectedBodyPart, allBodyParts, handleBodyPartChange }) {
    return (<div className={styles.selectBodyPartContainer}>
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Select body part</label>
        <select className={formStyles.selectInput} value={selectedBodyPart} onChange={handleBodyPartChange}>
          <option value="select">Select</option>
          {allBodyParts.map((bodyPart, index) => (<option key={`${bodyPart}${index}`} value={bodyPart}>
              {bodyPart}
            </option>))}
        </select>
      </div>
    </div>);
}
