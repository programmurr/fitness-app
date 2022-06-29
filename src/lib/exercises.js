export async function fetchAllBodyParts() {
  try {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey,
          "X-RapidAPI-Host": process.env.REACT_APP_XRapidAPIHost,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchExercisesByBodyPart(muscleGroup) {
  try {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscleGroup}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_XRapidAPIKey,
          "X-RapidAPI-Host": process.env.REACT_APP_XRapidAPIHost,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
