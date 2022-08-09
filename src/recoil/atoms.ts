import { atom } from "recoil";
import format from "date-fns-tz/format";
import createTime from "../lib/createTime";
import { BodyPartExercises } from "../typescript/interfaces";

export const workoutState = atom<BodyPartExercises[]>({
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

export const dateNow = atom<string>({
  key: "dateNow",
  default: format(new Date(), "d/M/y"),
});

export const timeNow = atom<string>({
  key: "timeNow",
  default: createTime(),
});
