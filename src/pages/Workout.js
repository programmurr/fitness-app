import styles from "../styles/workout.module.css";
import linkStyles from "../styles/links.module.css";
import formStyles from "../styles/forms.module.css";
import CustomDate from "../components/CustomDate";
import BodyPartDetail from "../components/BodyPartDetail";
import { Link } from "react-router-dom";
import { workoutState, dateNow, timeNow } from "../recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export default function Workout() {
  const date = useRecoilValue(dateNow);
  const time = useRecoilValue(timeNow);
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

  function handleSave() {
    const saveObject = {
      id: uuidv4(),
      date,
      time,
      workout,
    };
    console.log(saveObject);
    // POST to endpoint
  }

  // TODO:
  // Add TS
  // Add tests
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
      <button className={formStyles.saveButton} onClick={handleSave}>
        Save Workout
      </button>
      <Link to="/" className={linkStyles.homeLink}>
        Home
      </Link>
    </div>
  );
}
