import formStyles from "../styles/forms.module.css";

export default function ExerciseReps(props) {
  return (
    <div className="reps-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Reps</label>
        <input
          className={formStyles.selectInput}
          type="number"
          min="1"
          value={props.reps}
          onChange={(e) => props.handleChange("reps", e.target.value)}
        />
      </div>
    </div>
  );
}
