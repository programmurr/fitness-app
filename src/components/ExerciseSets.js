import formStyles from "../styles/forms.module.css";

export default function ExerciseSets(props) {
  return (
    <div className="sets-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Sets</label>
        <input
          className={formStyles.selectInput}
          type="number"
          min="1"
          value={props.sets}
          onChange={(e) => props.handleChange("sets", e.target.value)}
        />
      </div>
    </div>
  );
}
