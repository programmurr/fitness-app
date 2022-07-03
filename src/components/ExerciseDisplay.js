export default function ExerciseDisplay(props) {
  const { name, sets, reps, weight, note } = props;
  return (
    <div className="exercise-display">
      <p>Name</p>
      <p>{name}</p>
      <p>Sets</p>
      <p>{sets}</p>
      <p>Reps</p>
      <p>{reps}</p>
      <p>Weight</p>
      <p>{weight}</p>
      <p>Note</p>
      <p>{note}</p>
    </div>
  );
}
