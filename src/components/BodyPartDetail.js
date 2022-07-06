import { useEffect, useState } from "react";
import SelectBodyPart from "../components/SelectBodypart";
import ExerciseDetail from "../components/ExerciseDetail";
import {
  fetchAllBodyParts,
  fetchExercisesByBodyPart,
  filterExercisesByPodyPart,
} from "../lib/exercises";
import allBodyPartsJSON from "../lib/allBodyParts.json";
import styles from "../styles/bodypart-detail.module.css";
import formStyles from "../styles/forms.module.css";

export default function BodyPartDetail(props) {
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

  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: "Select",
      sets: "1",
      reps: "1",
      weight: "1",
      note: "",
    },
  ]);

  function handleDetailChange(detail, value, id) {
    const index = exercises.findIndex((exercise) => exercise.id === id);
    if (index > -1) {
      const exercisesCopy = [...exercises];
      exercisesCopy[index] = {
        ...exercisesCopy[index],
        [detail]: value,
      };
      setExercises(exercisesCopy);
    }
  }

  function addExercise() {
    const newExercise = {
      id: exercises.length + 1,
      name: "Select",
      sets: "1",
      reps: "1",
      weight: "",
      note: "",
    };
    setExercises([...exercises, newExercise]);
  }

  return (
    <div className={styles.bodyPartContainer}>
      <SelectBodyPart
        selectedBodyPart={selectedBodyPart}
        handleBodyPartChange={handleBodyPartChange}
        allBodyParts={allBodyParts}
      />
      {exercises.map((exercise, index) => (
        <ExerciseDetail
          key={`exercise-${index}`}
          exercise={exercise}
          exercisesByBodyPart={exercisesByBodyPart}
          handleDetailChange={handleDetailChange}
          handleAddExercise={addExercise}
        />
      ))}
      <button
        className={formStyles.workoutButton}
        onClick={props.handleAddBodyPart}
      >
        Add bodypart
      </button>
    </div>
  );
}
