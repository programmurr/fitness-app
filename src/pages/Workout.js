import styles from "../styles/workout.module.css";
import linkStyles from "../styles/links.module.css";
import formStyles from "../styles/forms.module.css";
import CustomDate from "../components/CustomDate";
import BodyPartDetail from "../components/BodyPartDetail";
import { Link } from "react-router-dom";
import { workoutState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

export default function Workout() {
  const [workout, setWorkout] = useRecoilState(workoutState);

  function handleAddBodyPart() {
    setWorkout([
      ...workout,
      {
        id: workout.length + 1,
        bodyPartName: "",
        exercises: [
          {
            id: 1,
            name: "",
            sets: "",
            reps: "",
            weight: "",
            note: "",
          },
        ],
      },
    ]);
  }

  // TODO:
  // Add SAVE functionality
  // Display bodypart as header in container

  return (
    <div className={styles.workoutContainer}>
      <CustomDate />
      {workout.map((bodypart, index) => (
        <BodyPartDetail
          key={`${bodypart}-${index}`}
          arrIndex={index}
          bodyPartDetails={bodypart}
          handleAddBodyPart={handleAddBodyPart}
        />
      ))}
      <button
        className={formStyles.saveButton}
        onClick={() => console.log(workout)}
      >
        Save Workout
      </button>
      <Link to="/" className={linkStyles.homeLink}>
        Home
      </Link>
    </div>
  );
}
