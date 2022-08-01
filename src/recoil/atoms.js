import { atom } from "recoil";

export const workoutState = atom({
  key: "WorkoutState",
  default: [
    {
      id: 1,
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
  ],
});
