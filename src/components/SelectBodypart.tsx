import { ChangeEvent } from "react";
import styles from "../styles/select-bodypart.module.css";
import formStyles from "../styles/forms.module.css";

interface SelectBodyPartProps {
  selectedBodyPart: string;
  allBodyParts: string[];
  handleBodyPartChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectBodyPart({selectedBodyPart, allBodyParts, handleBodyPartChange}: SelectBodyPartProps) {
  return (
    <div className={styles.selectBodyPartContainer}>
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel} htmlFor="selectBodyPart">Select body part</label>
        <select
          id="selectBodyPart"
          className={formStyles.selectInput}
          value={selectedBodyPart}
          onChange={handleBodyPartChange}
        >
          <option value="select" aria-label="default-bodypart">Select</option>
          {allBodyParts.map((bodyPart, index: number) => (
            <option key={`${bodyPart}${index}`} value={bodyPart}>
              {bodyPart}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
