"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forms_module_css_1 = __importDefault(require("../styles/forms.module.css"));
function SelectExercise(props) {
    return (<div className="select-exercise-container">
      <div className={forms_module_css_1.default.selectWrapper}>
        <label className={forms_module_css_1.default.selectLabel}>Select exercise</label>
        <select className={forms_module_css_1.default.selectInput} value={props.exercise} onChange={(e) => props.handleChange("name", e.target.value)}>
          <option value="select">Select</option>
          {props.exercisesByBodyPart.map((exercise, index) => (<option value={exercise.name} key={`${exercise.name}${index}`}>
              {exercise.name}
            </option>))}
        </select>
      </div>
    </div>);
}
exports.default = SelectExercise;
