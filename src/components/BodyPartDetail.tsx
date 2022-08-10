import { ChangeEvent, useEffect, useState } from "react";
import SelectBodyPart from "./SelectBodypart.jsx";
import ExerciseDetail from "./ExerciseDetail";
import {
  fetchAllBodyParts,
  fetchExercisesByBodyPart,
  filterExercisesByPodyPart,
} from "../lib/exercises";
import allBodyPartsJSON from "../lib/allBodyParts.json";
import styles from "../styles/bodypart-detail.module.css";
import formStyles from "../styles/forms.module.css";
import { workoutState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { BodyPartExercises, Exercise, LiveExercise } from "../typescript/interfaces.js";

interface BodyPartDetailProps {
  arrIndex: number;
  bodyPartDetails: BodyPartExercises;
  handleAddBodyPart: () => void;
}

export default function BodyPartDetail({
  arrIndex,
  bodyPartDetails,
  handleAddBodyPart,
}: BodyPartDetailProps): JSX.Element {
  const { exercises } = bodyPartDetails;
  const [workout, setWorkout] = useRecoilState(workoutState);

  // Continue adding types from here
  const [allBodyParts, setAllBodyParts] = useState<string[]>([] as string[]);
  useEffect(() => {
    async function getBodyParts(): Promise<void> {
      try {
        const bodyParts: string[] =
          process.env.NODE_ENV === "production"
            ? await fetchAllBodyParts()
            : allBodyPartsJSON;
        setAllBodyParts(bodyParts);
      } catch (error) {
        console.error(error);
        setAllBodyParts([] as string[]);
      }
    }
    getBodyParts();
  }, []);

  const [selectedBodyPart, setSelectedBodyPart] = useState<string>("");

  const [exercisesByBodyPart, setExercisesByBodyPart] = useState<Exercise[]>([] as Exercise[]);

  async function handleBodyPartChange(event: ChangeEvent<HTMLSelectElement>): Promise<void> {
    const part: string = event.target.value;
    const updatedDetails: BodyPartExercises = { ...bodyPartDetails, bodyPartName: part };
    const newWorkout: BodyPartExercises[] = [...workout.slice(0, arrIndex), updatedDetails, ...workout.slice(arrIndex + 1)];
    setWorkout(newWorkout);
    setSelectedBodyPart(part);
    try {
      const sanitizedBodyPart: string = part.includes(" ")
        ? part.replace(" ", "%20")
        : part;
      const exercises: Exercise[] =
        process.env.NODE_ENV === "production"
          ? await fetchExercisesByBodyPart(sanitizedBodyPart)
          : filterExercisesByPodyPart(part);
      setExercisesByBodyPart(exercises);
    } catch (error) {
      console.error(error);
      setExercisesByBodyPart([] as Exercise[]);
    }
  }

  function handleDetailChange(detail: string, value: string, id: number): void {
    const index: number = exercises.findIndex((exercise: LiveExercise) => exercise.id === id);
    const exerciseToUpdate: LiveExercise | undefined = exercises.find((exercise: LiveExercise) => exercise.id === id);
    if (exerciseToUpdate) {
      const updatedExercise: LiveExercise = {...exerciseToUpdate, [detail]: value };
      const newExercises: LiveExercise[] = [...exercises.slice(0, index), updatedExercise, ...exercises.slice(index + 1)];
      const updatedDetails = {...bodyPartDetails, exercises: newExercises };
      const newWorkout: BodyPartExercises[] = [...workout.slice(0, arrIndex), updatedDetails, ...workout.slice(arrIndex + 1)];
      setWorkout(newWorkout);
    }
  }

  function addExercise(): void {
    const newExercise = {
      id: exercises.length + 1,
      name: "",
      sets: "",
      reps: "",
      weight: "",
      note: "",
    };
    const updatedDetails: BodyPartExercises = { ...bodyPartDetails, exercises: [...exercises, newExercise] };
    const newWorkout: BodyPartExercises[] = [...workout.slice(0, arrIndex), updatedDetails, ...workout.slice(arrIndex + 1)];
    setWorkout(newWorkout);
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
      <button className={formStyles.workoutButton} onClick={handleAddBodyPart}>
        Add bodypart
      </button>
    </div>
  );
}
