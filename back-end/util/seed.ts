import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();
    await prisma.exercise.deleteMany();

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

    await prisma.exercise.createMany({
        data: [
            { name: 'squat', sets: 3, reps: 5 },
            { name: 'deadlift', sets: 2, reps: 3 },
            { name: 'bench press', sets: 3, reps: 8 },
        ],
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
