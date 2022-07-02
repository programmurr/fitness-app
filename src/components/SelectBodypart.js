export default function SelectBodyPart(props) {
  return (
    <div className="select-bodypart-container">
      <label>Select body part</label>
      <select
        value={props.selectedBodyPart}
        onChange={props.handleBodyPartChange}
      >
        <option value="select">Select</option>
        {props.allBodyParts.map((bodyPart, index) => (
          <option value={bodyPart} key={`${bodyPart}${index}`}>
            {bodyPart}
          </option>
        ))}
      </select>
    </div>
  );
}
