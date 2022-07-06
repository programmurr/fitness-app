import { HomeLink } from "../styled-components/links/HomeLink";
import styles from "../styles/workout.module.css";
import CustomDate from "../components/CustomDate";
import BodyPartDetail from "../components/BodyPartDetail";
import { useState } from "react";

export default function Workout() {
  const [partDetail, setPartDetail] = useState([{ name: "Select" }]);

  function handleAddBodyPart() {
    setPartDetail([...partDetail, { name: "Select" }]);
  }

  // TODO:
  // Fix 'add exercise' and 'add bodypart# style issues
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
      <HomeLink to="/">Home</HomeLink>
    </div>
  );
}
