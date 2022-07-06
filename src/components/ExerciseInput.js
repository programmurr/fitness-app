import formStyles from "../styles/forms.module.css";

export default function ExerciseInput(props) {
  const { label, inputType } = props;
  return (
    <div className={`${label}-container`}>
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
        <input
          className={formStyles.selectInput}
          type={inputType}
          min={inputType === "number" ? "1" : undefined}
          value={props.value}
          onChange={(e) => props.handleChange(label, e.target.value)}
        />
      </div>
    </div>
  );
}
