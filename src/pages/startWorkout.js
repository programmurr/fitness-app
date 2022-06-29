import { HomeLink } from "../styled-components/links/HomeLink";
import "../styles/start-workout.css";
import { useEffect, useState } from "react";
import CustomDate from "../components/CustomDate";
import { fetchAllBodyParts, fetchExercisesByBodyPart } from "../lib/exercises";

export default function StartWorkout() {
  const [allBodyParts, setAllBodyParts] = useState([]);
  useEffect(() => {
    async function getBodyParts() {
      try {
        const groups = await fetchAllBodyParts();
        setAllBodyParts(groups);
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
          const exercises = await fetchExercisesByBodyPart(sanitizedBodyPart);
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

  return (
    <div className="start-workout-container">
      <CustomDate />
      <form>
        {/* Select body part worked */}
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
      </form>
      {/* Perform exercise */}
      {/* Record reps */}
      {/* Record weight */}
      {/* Record note */}
      {/* Move on to next exercise/MuscleGroup */}
      <HomeLink to="/">Home</HomeLink>
    </div>
  );
}
