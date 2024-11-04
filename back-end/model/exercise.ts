export class Exercise {
    private id?: number;
    private name: string;
    private sets: number;
    private reps: number;

    constructor(exercise: {name: string, sets: number, reps: number, id?: number}) {
        this.name = exercise.name;
        this.sets = exercise.sets;
        this.reps = exercise.reps;
        this.id = exercise.id;
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

    public getSets(): number {
        return this.sets;
    }

    public setSets(sets: number): void {
        this.sets = sets;
    }

    public getReps(): number {
        return this.reps;
    }

    public setReps(reps: number): void {
        this.reps = reps;
    }
}
