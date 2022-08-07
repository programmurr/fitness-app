import { atom } from "recoil";
import format from "date-fns-tz/format";
import createTime from "../lib/createTime";
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
export const dateNow = atom({
    key: "dateNow",
    default: format(new Date(), "d/M/y"),
});
export const timeNow = atom({
    key: "timeNow",
    default: createTime(),
});
