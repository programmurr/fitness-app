import formStyles from "../styles/forms.module.css";

export default function ExerciseNote(props) {
  return (
    <div className="note-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Note</label>
        <input
          className={formStyles.selectInput}
          type="text"
          value={props.note}
          onChange={(e) => props.handleChange("note", e.target.value)}
        />
      </div>
    </div>
  );
  // return (
  //   <div className="note-container">
  //     <label>Note</label>
  //     <input
  //       type="text"
  //       value={props.note}
  //       onChange={(e) => props.handleChange("note", e.target.value)}
  //     />
  //   </div>
  // );
}
