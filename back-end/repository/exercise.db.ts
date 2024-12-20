import { Exercise } from "../model/exercise";
import { ExerciseInput } from "../types";
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

const createExercise = async (exerciseInput: ExerciseInput): Promise<Exercise> => {
    try {
        const exercisePrisma = await database.exercise.create({
            data: {
                name: exerciseInput.name,
                reps: exerciseInput.reps,
                sets: exerciseInput.sets
            }
        });
        return Exercise.from(exercisePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const deleteExercise = async (id: number): Promise<Exercise> => {
    try {
        const exercisePrisma = await database.exercise.delete({
            where: { id }
        });
        return Exercise.from(exercisePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default { getAllExercises, createExercise, deleteExercise };
