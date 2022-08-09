import { useEffect, useState } from "react";
import SelectBodyPart from "./SelectBodypart.jsx";
import ExerciseDetail from "./ExerciseDetail";
import { fetchAllBodyParts, fetchExercisesByBodyPart, filterExercisesByPodyPart, } from "../lib/exercises";
import allBodyPartsJSON from "../lib/allBodyParts.json";
import styles from "../styles/bodypart-detail.module.css";
import formStyles from "../styles/forms.module.css";
import { workoutState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { replaceItemAtIndex } from "../lib/replaceItemAtIndex.js";
export default function BodyPartDetail({ arrIndex, bodyPartDetails, handleAddBodyPart, }) {
    const { exercises } = bodyPartDetails;
    const [workout, setWorkout] = useRecoilState(workoutState);
    // Continue adding types from here
    const [allBodyParts, setAllBodyParts] = useState([]);
    useEffect(() => {
        async function getBodyParts() {
            try {
                const bodyParts = process.env.NODE_ENV === "production"
                    ? await fetchAllBodyParts()
                    : allBodyPartsJSON;
                setAllBodyParts(bodyParts);
            }
            catch (error) {
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
        const updatedDetails = { ...bodyPartDetails, bodyPartName: part };
        const newWorkout = replaceItemAtIndex(workout, arrIndex, updatedDetails);
        setWorkout(newWorkout);
        setSelectedBodyPart(part);
        // Filter exercises according to body part
        try {
            const sanitizedBodyPart = part.includes(" ")
                ? part.replace(" ", "%20")
                : part;
            const exercises = process.env.NODE_ENV === "production"
                ? await fetchExercisesByBodyPart(sanitizedBodyPart)
                : filterExercisesByPodyPart(part);
            setExercisesByBodyPart(exercises);
        }
        catch (error) {
            console.error(error);
            setExercisesByBodyPart([]);
        }
    }
    function handleDetailChange(detail, value, id) {
        const index = exercises.findIndex((exercise) => exercise.id === id);
        const exerciseToUpdate = exercises.find((exercise) => exercise.id === id);
        if (exerciseToUpdate) {
            const updatedExercise = { ...exerciseToUpdate, [detail]: value };
            const newExercises = replaceItemAtIndex(exercises, index, updatedExercise);
            const newWorkout = replaceItemAtIndex(workout, arrIndex, {
                ...bodyPartDetails,
                exercises: newExercises,
            });
            setWorkout(newWorkout);
        }
    }
    function addExercise() {
        const newExercise = {
            id: exercises.length + 1,
            name: "",
            sets: "",
            reps: "",
            weight: "",
            note: "",
        };
        const updatedBodyPartDetails = { ...bodyPartDetails, exercises: [...exercises, newExercise] };
        const newWorkout = replaceItemAtIndex(workout, arrIndex, updatedBodyPartDetails);
        setWorkout(newWorkout);
    }
    return (<div className={styles.bodyPartContainer}>
      <SelectBodyPart selectedBodyPart={selectedBodyPart} handleBodyPartChange={handleBodyPartChange} allBodyParts={allBodyParts}/>
      {exercises.map((exercise, index) => (<ExerciseDetail key={`exercise-${index}`} exercise={exercise} exercisesByBodyPart={exercisesByBodyPart} handleDetailChange={handleDetailChange} handleAddExercise={addExercise}/>))}
      <button className={formStyles.workoutButton} onClick={handleAddBodyPart}>
        Add bodypart
      </button>
    </div>);
}
