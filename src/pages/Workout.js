import styles from "../styles/workout.module.css";
import linkStyles from "../styles/links.module.css";
import CustomDate from "../components/CustomDate";
import BodyPartDetail from "../components/BodyPartDetail";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Workout() {
  const [partDetail, setPartDetail] = useState([{ name: "Select" }]);

  function handleAddBodyPart() {
    setPartDetail([...partDetail, { name: "Select" }]);
  }

  // TODO:
  // Add SAVE functionality

  return (
    <div className={styles.workoutContainer}>
      <CustomDate />
      {partDetail.map((bodypart, index) => (
        <BodyPartDetail
          key={`${bodypart}-${index}`}
          bodyPart={bodypart.name}
          handleAddBodyPart={handleAddBodyPart}
        />
      ))}
      <Link to="/" className={linkStyles.homeLink}>
        Home
      </Link>
    </div>
  );
}
