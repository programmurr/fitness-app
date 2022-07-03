export default function ExerciseWeight(props) {
  return (
    <div className="weight-container">
      <label>Weight</label>
      <input
        type="number"
        min="0"
        value={props.weight}
        onChange={(e) => props.handleChange("weight", e.target.value)}
      />
      <span>KG</span>
    </div>
  );
}
