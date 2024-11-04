import { Workout } from "./workout";

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
}
