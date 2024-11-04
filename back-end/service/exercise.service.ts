import { Exercise } from "../model/exercise";
import exerciseDb from "../repository/exercise.db";

const getAllExercises = (): Exercise[] => {
    const exercises = exerciseDb.getAllExercises();
    return exercises;
};

export default {getAllExercises}