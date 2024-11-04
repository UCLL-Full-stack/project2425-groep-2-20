import { Exercise } from "./exercise";

export class Workout {
    private id?: number;
    private name: string;
    private exercises: Exercise[];

    constructor(name: string, exercises: Exercise[], id?: number) {
        this.name = name;
        this.exercises = exercises;
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

    public getExercises(): Exercise[] {
        return this.exercises;
    }

    public setExercises(exercises: Exercise[]): void {
        this.exercises = exercises;
    }
}
