export default function SelectExercise(props) {
  return (
    <div className="select-exercise-container">
      <label>Select exercise</label>
      <select
        value={props.exercise}
        onChange={(e) => props.handleChange("name", e.target.value)}
      >
        <option value="select">Select</option>
        {props.exercisesByBodyPart.map((exercise, index) => (
          <option value={exercise.name} key={`${exercise.name}${index}`}>
            {exercise.name}
          </option>
        ))}
      </select>
    </div>
  );
}
