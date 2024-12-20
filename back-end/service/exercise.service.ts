import { Exercise } from "../model/exercise";
import exerciseDb from "../repository/exercise.db";
import { ExerciseInput } from "../types";

const getAllExercises = async (): Promise<Exercise[]> => {
    const exercises = await exerciseDb.getAllExercises();
    return exercises;
};

const createExercise = async (exerciseInput: ExerciseInput): Promise<Exercise> => {
    const exercise = await exerciseDb.createExercise(exerciseInput);
    return exercise;
};

const deleteExercise = async (exerciseId: number): Promise<Exercise> => {
    const exercise = await exerciseDb.deleteExercise(exerciseId);
    return exercise;
};



export default {getAllExercises,createExercise,deleteExercise}