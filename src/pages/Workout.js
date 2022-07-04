import { HomeLink } from "../styled-components/links/HomeLink";
import "../styles/start-workout.css";
import CustomDate from "../components/CustomDate";
import BodyPartDetail from "../components/BodyPartDetail";
import { useState } from "react";

export default function Workout() {
  const [partDetail, setPartDetail] = useState([{ name: "Select" }]);

  function handleAddBodyPart() {
    setPartDetail([...partDetail, { name: "Select" }]);
  }

  // TODO:
  // Style
  return (
    <div className="start-workout-container">
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
