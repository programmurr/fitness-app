export default function ExerciseReps(props) {
  return (
    <div className="reps-container">
      <label>Reps</label>
      <input
        type="number"
        min="1"
        value={props.reps}
        onChange={(e) => props.handleChange("reps", e.target.value)}
      />
    </div>
  );
}
