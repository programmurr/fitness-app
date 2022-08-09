export function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
// body part change
// {
//   "id": 1,
//   "bodyPartName": "back",
//   "exercises": [
//     {
//       "id": 1,
//       "name": "",
//       "sets": "",
//       "reps": "",
//       "weight": "",
//       "note": ""
//     }
//   ]
// }
// detail change
// {
//   "id": 1,
//   "name": "archer pull up",
//   "sets": "",
//   "reps": "",
//   "weight": "",
//   "note": ""
// }
// {
//   "id": 1,
//   "bodyPartName": "back",
//   "exercises": [
//     {
//       "id": 1,
//       "name": "archer pull up",
//       "sets": "1",
//       "reps": "",
//       "weight": "",
//       "note": ""
//     }
//   ]
// }
// add exercise
// {
//   "id": 1,
//   "bodyPartName": "back",
//   "exercises": [
//     {
//       "id": 1,
//       "name": "archer pull up",
//       "sets": "1",
//       "reps": "",
//       "weight": "",
//       "note": ""
//     },
//     {
//       "id": 2,
//       "name": "",
//       "sets": "",
//       "reps": "",
//       "weight": "",
//       "note": ""
//     }
//   ]
// }
