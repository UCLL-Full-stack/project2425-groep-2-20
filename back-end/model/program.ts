import { Workout } from "./workout";
import { Workout as WorkoutPrisma } from '@prisma/client';
import {Exercise as ExercisePrisma } from '@prisma/client';
import {Program as ProgramPrisma } from '@prisma/client';
export class Program {
    private id?: number;
    private name: string;
    private workouts: Workout[];
    private days: number;

    constructor(name: string, workouts: Workout[], days: number, id?: number) {
        this.name = name;
        this.workouts = workouts;
        this.days = days;
        this.id = id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getWorkouts(): Workout[] {
        return this.workouts;
    }

    public setWorkouts(workouts: Workout[]): void {
        this.workouts = workouts;
    }

    public getDays(): number {
        return this.days;
    }

    public setDays(days: number): void {
        this.days = days;
    }

    static from({ id, name, days, workouts }: ProgramPrisma & { workouts: (WorkoutPrisma & { exercises: ExercisePrisma[] })[] }): Program {
        const mappedWorkouts = workouts.map(Workout.from);
        return new Program(name, mappedWorkouts, days, id);
    }
    
}
