export default function ExerciseSets(props) {
  return (
    <div className="sets-container">
      <label>Sets</label>
      <input
        type="number"
        min="1"
        value={props.sets}
        onChange={(e) => props.handleChange("sets", e.target.value)}
      />
    </div>
  );
}
