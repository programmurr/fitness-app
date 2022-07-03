export default function ExerciseNote(props) {
  return (
    <div className="note-container">
      <label>Note</label>
      <input
        type="text"
        value={props.note}
        onChange={(e) => props.handleChange("note", e.target.value)}
      />
    </div>
  );
}
