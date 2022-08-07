export interface Exercise {
  name: string;
  bodyPart: string;
  gifUrl: string;
  id: string;
  target: string;
}

export interface LiveExercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  note: string;
}

export interface BodyPartExercises {
  id: number;
  bodyPartName: string;
  exercises: LiveExercise[];
}
