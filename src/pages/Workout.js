import { HomeLink } from "../styled-components/links/HomeLink";
import "../styles/start-workout.css";
import { useEffect, useState } from "react";
import CustomDate from "../components/CustomDate";
import SelectBodyPart from "../components/SelectBodypart";
import ExerciseDetail from "../components/ExerciseDetail";
import ExerciseDisplay from "../components/ExerciseDisplay";
import {
  fetchAllBodyParts,
  fetchExercisesByBodyPart,
  filterExercisesByPodyPart,
} from "../lib/exercises";
import allBodyPartsJSON from "../lib/allBodyParts.json";

export default function Workout() {
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

  const [exercises, setExercises] = useState([]);

  function addExercise(exerciseDetail) {
    setExercises([...exercises, exerciseDetail]);
  }

  // TODO:
  // Ability to add multiple bodyparts
  // Style
  return (
    <div className="start-workout-container">
      <CustomDate />
      <div className="bodypart-container">
        <SelectBodyPart
          selectedBodyPart={selectedBodyPart}
          handleBodyPartChange={handleBodyPartChange}
          allBodyParts={allBodyParts}
        />
        {exercises.map((exercise, index) => (
          <ExerciseDisplay
            key={`exercise${index}`}
            name={exercise.name}
            sets={exercise.sets}
            reps={exercise.reps}
            weight={exercise.weight}
            note={exercise.note}
          />
        ))}
        <ExerciseDetail
          exercisesByBodyPart={exercisesByBodyPart}
          handleAddExercise={addExercise}
        />
      </div>
      <HomeLink to="/">Home</HomeLink>
    </div>
  );
}
