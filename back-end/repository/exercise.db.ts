import { Exercise } from "../model/exercise";
import database from "./database";

const getAllExercises = async (): Promise<Exercise[]> => {
    try {
        const exercisesPrisma = await database.exercise.findMany();
        return exercisesPrisma.map((exercisesPrisma) => Exercise.from(exercisesPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default{getAllExercises}