import { PrismaClient } from '@prisma/client';
import { Program } from '../model/program';
import { Workout } from '../model/workout';
import { Exercise } from '../model/exercise';
import database from './database';

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
    return programsPrisma.map((programPrisma) => Program.from(programPrisma));
    }
    catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
}

export default{getAllPrograms}
