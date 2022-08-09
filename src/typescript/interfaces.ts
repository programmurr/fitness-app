export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export interface LiveExercise {
  id: number;
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
