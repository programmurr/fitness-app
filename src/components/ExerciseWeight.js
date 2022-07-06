import formStyles from "../styles/forms.module.css";

export default function ExerciseWeight(props) {
  return (
    <div className="weight-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Weight (kg)</label>
        <input
          className={formStyles.selectInput}
          type="number"
          min="0"
          value={props.weight}
          onChange={(e) => props.handleChange("weight", e.target.value)}
        />
      </div>
    </div>
  );
}
