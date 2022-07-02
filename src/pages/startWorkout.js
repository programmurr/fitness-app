import { HomeLink } from "../styled-components/links/HomeLink";
import "../styles/start-workout.css";
import { useEffect, useState } from "react";
import CustomDate from "../components/CustomDate";
import {
  fetchAllBodyParts,
  fetchExercisesByBodyPart,
  filterExercisesByPodyPart,
} from "../lib/exercises";
import allBodyPartsJSON from "../lib/allBodyParts.json";

export default function StartWorkout() {
  const [allBodyParts, setAllBodyParts] = useState([]);
  useEffect(() => {
    async function getBodyParts() {
      try {
        const bodyParts =
          process.env.NODE_ENV === "production"
            ? await fetchAllBodyParts()
            : allBodyPartsJSON;
        setAllBodyParts(bodyParts);
      } catch (error) {
        console.error(error);
        setAllBodyParts([]);
      }
    }
    getBodyParts();
  }, []);

  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  const [exercisesByBodyPart, setExercisesByBodyPart] = useState([]);
  useEffect(() => {
    if (selectedBodyPart) {
      async function getExercisesByBodyPart() {
        try {
          const sanitizedBodyPart = selectedBodyPart.includes(" ")
            ? selectedBodyPart.replace(" ", "%20")
            : selectedBodyPart;
          const exercises =
            process.env.NODE_ENV === "production"
              ? await fetchExercisesByBodyPart(sanitizedBodyPart)
              : filterExercisesByPodyPart(selectedBodyPart);
          setExercisesByBodyPart(exercises);
        } catch (error) {
          console.error(error);
          setExercisesByBodyPart([]);
        }
      }
      getExercisesByBodyPart();
    }
  }, [selectedBodyPart]);

  const [selectedExercise, setSelectedExercise] = useState("");

  const [reps, setReps] = useState("1");
  const [numSets, setNumSets] = useState("1");
  const [weight, setWeight] = useState("0");
  const [note, setNote] = useState("");

  function addExercise(e) {
    console.log("Wut");
  }

  // TODO: Make a local version of all exercises or I will hit API limit soon :(
  return (
    <div className="start-workout-container">
      <CustomDate />
      {/* Select body part worked */}
      <div className="bodypart-container">
        <label>Select body part</label>
        <select
          value={selectedBodyPart}
          onChange={(e) => setSelectedBodyPart(e.target.value)}
        >
          <option value="select">Select</option>
          {allBodyParts.map((bodyPart, index) => (
            <option value={bodyPart} key={`${bodyPart}${index}`}>
              {bodyPart}
            </option>
          ))}
        </select>
        {/* Select exercise name (type & filter in future) */}
        {/* Can have multiple exercises per bodypart-container */}
        {/* Need 'Add Exercise' button that auto-filters same exercises for bodypart */}
        <div className="exercise-container">
          <label>Select exercise</label>
          <select
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
          >
            <option value="select">Select</option>
            {exercisesByBodyPart.map((exercise, index) => (
              <option value={exercise.name} key={`${exercise.name}${index}`}>
                {exercise.name}
              </option>
            ))}
          </select>
          {/* Perform exercise */}
          {/* Record reps */}
          <div className="set-container">
            <label>Sets</label>
            <input
              type="number"
              value={numSets}
              onChange={(e) => setNumSets(e.target.value)}
              min="1"
            />
          </div>
          <div className="rep-container">
            <label>Reps</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              min="1"
            />
          </div>
          {/* Record weight */}
          <div className="weight-container">
            <label>Weight</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="0"
            />
            <span>KG</span>
          </div>
          {/* Record note */}
          <div className="note-container">
            <label>Note</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          {/* Move on to next exercise */}
          <div className="add-exercise-container">
            <button className="add-exercise-button" onClick={addExercise}>
              +
            </button>
          </div>
        </div>
        {/* Move on to next body part */}
      </div>
      <HomeLink to="/">Home</HomeLink>
    </div>
  );
}
