export default function exerciseReducer(state, action) {
  switch (action.type) {
    case "note":
      return action.payload;
    case "weight":
      return action.payload;
    case "reps":
      return action.payload;
    case "sets":
      return action.payload;
    case "exercise":
      return action.payload;
    default:
      throw new Error("Error updating reducer");
  }
}
