import { PrismaClient } from '@prisma/client';
import { Program } from '../model/program';
import { Workout } from '../model/workout';
import { Exercise } from '../model/exercise';
import database from './database';
import { ProgramInput } from '../types';

const getAllPrograms = async (): Promise<Program[]> => {
    try {
        const programsPrisma = await database.program.findMany({
            include: {
                workouts: {
                    include: {
                        exercises: true,
                    },
                },
            },
        });
        return programsPrisma.map(programPrisma => Program.from(programPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const createProgram = async (programInput: ProgramInput): Promise<Program> => {
    try {
        const programPrisma = await database.program.create({
            data: {
                name: programInput.name,
                days: programInput.days,
                workouts: {
                    create: programInput.workouts.map(workout => ({
                        name: workout.name,
                        exercises: {
                            create: workout.exercises.map(exercise => ({
                                name: exercise.name,
                                sets: exercise.sets,
                                reps: exercise.reps
                            }))
                        }
                    }))
                }
            },
            include: {
                workouts: {
                    include: {
                        exercises: true,
                    },
                },
            },
        });

        return Program.from(programPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default { getAllPrograms, createProgram };
