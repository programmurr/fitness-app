import { Exercise } from "../typescript/interfaces";
import alLExercises from "./allExercises.json";

const xRapidApiKey = process.env.REACT_APP_XRapidAPIKey ? process.env.REACT_APP_XRapidAPIKey : "";
const xRapidApiHost = process.env.REACT_APP_XRapidAPIHost ? process.env.REACT_APP_XRapidAPIHost : "";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("X-RapidAPI-Key", xRapidApiKey);
requestHeaders.set("X-RapidAPI-Host", xRapidApiHost);

export async function fetchAllBodyParts(): (Promise<string[] | []>) {
  try {
    const response: Response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      {
        headers: requestHeaders,
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchExercisesByBodyPart(selectedBodyPart: string): (Promise<Exercise[] | []>) {
  try {
    const response: Response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
      {
        headers: requestHeaders,
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function filterExercisesByPodyPart(selectedBodyPart: string): Exercise[] {
  return alLExercises.filter(
    (exercise) => exercise.bodyPart === selectedBodyPart
  );
}
