import { HomeLink } from "../styled-components/links/HomeLink";
import "../styles/start-workout.css";
import { useEffect, useState } from "react";
import CustomDate from "../components/CustomDate";
import ExerciseNote from "../components/ExerciseNote";
import ExerciseWeight from "../components/ExerciseWeight";
import ExerciseReps from "../components/ExerciseReps";
import ExerciseSets from "../components/ExerciseSets";
import SelectExercise from "../components/SelectExercise";
import SelectBodyPart from "../components/SelectBodypart";
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

  async function handleBodyPartChange(event) {
    const part = event.target.value;
    setSelectedBodyPart(part);
    try {
      const sanitizedBodyPart = part.includes(" ")
        ? part.replace(" ", "%20")
        : part;
      const exercises =
        process.env.NODE_ENV === "production"
          ? await fetchExercisesByBodyPart(sanitizedBodyPart)
          : filterExercisesByPodyPart(part);
      setExercisesByBodyPart(exercises);
    } catch (error) {
      console.error(error);
      setExercisesByBodyPart([]);
    }
  }

  function addExercise(e) {
    console.log("Wut");
  }

  // TODO:
  // Refactor broken out Exercise components (all very similar)
  // Ability to add multiple exercises per bodypart
  // Ability to add multiple bodyparts
  // Style
  return (
    <div className="start-workout-container">
      <CustomDate />
      {/* Select body part worked */}
      <div className="bodypart-container">
        <SelectBodyPart
          selectedBodyPart={selectedBodyPart}
          handleBodyPartChange={handleBodyPartChange}
          allBodyParts={allBodyParts}
        />
        <div className="exercise-container">
          <SelectExercise exercisesByBodyPart={exercisesByBodyPart} />
          <ExerciseSets />
          <ExerciseReps />
          <ExerciseWeight />
          <ExerciseNote />
          <div className="add-exercise-container">
            <button className="add-exercise-button" onClick={addExercise}>
              +
            </button>
          </div>
        </div>
      </div>
      <HomeLink to="/">Home</HomeLink>
    </div>
  );
}
