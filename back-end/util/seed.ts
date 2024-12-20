import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();
    await prisma.exercise.deleteMany();
    await prisma.program.deleteMany();
    await prisma.workout.deleteMany();

    const admin = await prisma.user.create({
        data: {
            username: 'user1',
            password: await bcrypt.hash('user1', 12),
            firstName: 'admin',
            lastName: 'persoon',
            email: 'admin@ucll.be',
            role: 'admin',
        },
    });

    const user = await prisma.user.create({
        data: {
            username: 'user2',
            password: await bcrypt.hash('user2', 12),
            firstName: 'user',
            lastName: 'persoon',
            email: 'user@ucll.be',
            role: 'user',
        },
    });

    const exercises = await prisma.exercise.createMany({
        data: [
            { name: 'squat', sets: 3, reps: 5 },
            { name: 'deadlift', sets: 2, reps: 3 },
            { name: 'chinup', sets: 3, reps: 10 },
            { name: 'bicep curl', sets: 3, reps: 12 },
            { name: 'overhead press', sets: 3, reps: 8 },
            { name: 'bench press', sets: 3, reps: 8 },
            { name: 'lunges', sets: 3, reps: 12 },
            { name: 'dips', sets: 3, reps: 12 },
            { name: 'pull-up', sets: 3, reps: 10 },
            { name: 'weighted crunch', sets: 3, reps: 15 },
        ],
    });

    const allExercises = await prisma.exercise.findMany();
    const getExerciseId = (name: string) => allExercises.find(ex => ex.name === name)?.id;

    const upperLowerProgram = await prisma.program.create({
        data: {
            name: 'Upper/Lower Split',
            days: 4,
            workouts: {
                create: [
                    {
                        name: 'Upper Body Day',
                        exercises: {
                            connect: [
                                { id: getExerciseId('bench press') },
                                { id: getExerciseId('overhead press') },
                                { id: getExerciseId('chinup') },
                                { id: getExerciseId('bicep curl') },
                            ],
                        },
                    },
                    {
                        name: 'Lower Body Day',
                        exercises: {
                            connect: [
                                { id: getExerciseId('squat') },
                                { id: getExerciseId('deadlift') },
                                { id: getExerciseId('lunges') },
                            ],
                        },
                    },
                    {
                        name: 'Upper Body Day (Repeat)',
                        exercises: {
                            connect: [
                                { id: getExerciseId('bench press') },
                                { id: getExerciseId('overhead press') },
                                { id: getExerciseId('chinup') },
                                { id: getExerciseId('bicep curl') },
                            ],
                        },
                    },
                    {
                        name: 'Lower Body Day (Repeat)',
                        exercises: {
                            connect: [
                                { id: getExerciseId('squat') },
                                { id: getExerciseId('deadlift') },
                                { id: getExerciseId('lunges') },
                            ],
                        },
                    },
                ],
            },
        },
    });

    const fullBodyProgram = await prisma.program.create({
        data: {
            name: 'Full-Body Workouts',
            days: 4,
            workouts: {
                create: [
                    {
                        name: 'Full-Body Day 1',
                        exercises: {
                            connect: [
                                { id: getExerciseId('squat') },
                                { id: getExerciseId('bench press') },
                                { id: getExerciseId('pull-up') },
                            ],
                        },
                    },
                    {
                        name: 'Full-Body Day 2',
                        exercises: {
                            connect: [
                                { id: getExerciseId('deadlift') },
                                { id: getExerciseId('overhead press') },
                                { id: getExerciseId('dips') },
                            ],
                        },
                    },
                    {
                        name: 'Full-Body Day 3',
                        exercises: {
                            connect: [
                                { id: getExerciseId('lunges') },
                                { id: getExerciseId('chinup') },
                                { id: getExerciseId('weighted crunch') },
                            ],
                        },
                    },
                    {
                        name: 'Full-Body Day 4',
                        exercises: {
                            connect: [
                                { id: getExerciseId('squat') },
                                { id: getExerciseId('overhead press') },
                                { id: getExerciseId('pull-up') },
                            ],
                        },
                    },
                ],
            },
        },
    });
};

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
