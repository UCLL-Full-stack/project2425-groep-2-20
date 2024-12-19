import { Exercise } from "../model/exercise";
import exerciseDb from "../repository/exercise.db";

const getAllExercises = async (): Promise<Exercise[]> => {
    const exercises = await exerciseDb.getAllExercises();
    return exercises;
};

export default {getAllExercises}