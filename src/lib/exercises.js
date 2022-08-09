import alLExercises from "./allExercises.json";
const xRapidApiKey = process.env.REACT_APP_XRapidAPIKey ? process.env.REACT_APP_XRapidAPIKey : "";
const xRapidApiHost = process.env.REACT_APP_XRapidAPIHost ? process.env.REACT_APP_XRapidAPIHost : "";
const requestHeaders = new Headers();
requestHeaders.set("X-RapidAPI-Key", xRapidApiKey);
requestHeaders.set("X-RapidAPI-Host", xRapidApiHost);
export async function fetchAllBodyParts() {
    try {
        const response = await fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
            headers: requestHeaders,
        });
        return await response.json();
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
export async function fetchExercisesByBodyPart(selectedBodyPart) {
    try {
        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`, {
            headers: requestHeaders,
        });
        return await response.json();
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
export function filterExercisesByPodyPart(selectedBodyPart) {
    return alLExercises.filter((exercise) => exercise.bodyPart === selectedBodyPart);
}
