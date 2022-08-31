import styles from "../styles/workout.module.css";
import linkStyles from "../styles/links.module.css";
import formStyles from "../styles/forms.module.css";
import CustomDate from "../components/CustomDate";
import BodyPartDetail from "../components/BodyPartDetail";
import { Link } from "react-router-dom";
import { workoutState, dateNow, timeNow } from "../recoil/atoms";
import { useRecoilState, useRecoilCallback, Snapshot } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { SaveObject } from "../typescript/interfaces";

export default function Workout(): JSX.Element {
  const [workout, setWorkout] = useRecoilState(workoutState);

  function handleAddBodyPart(): void {
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

  // Used to read date and time state without subscribing component to updates
  // If used with useRecoilValue, it re-rendered every second because of time
  const handleSave: () => Promise<void> = useRecoilCallback(({snapshot}) => async () => {
    const [date, time] = await getDateAndTime(snapshot);
    const saveObject: SaveObject = {
      id: uuidv4(),
      date,
      time,
      workout,
    };
    console.log(saveObject);
    // POST to endpoint
  }, []);

  async function getDateAndTime(snapshot: Snapshot): Promise<[string, string]> {
    return await Promise.all([
      snapshot.getPromise(dateNow), 
      snapshot.getPromise(timeNow)
    ]);
  }

  // TODO:
  // Add tests
  // Add SAVE functionality
  // Display bodypart as header in container
  // Filter exercises by typing
  
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
