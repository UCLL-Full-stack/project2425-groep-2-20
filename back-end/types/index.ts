import { Exercise } from "../model/exercise";
import { Workout } from "../model/workout";

type Role = 'admin' | 'user' | 'reader';

type UserInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
};

type AuthenticationResponse = {
    token: string;
    username: string;
    fullname: string;
    role: string;
};

type ProgramInput = {
    id?:number;
    name: string;
    workouts: WorkoutInput[];
    days: number;
}

type WorkoutInput = {
    id?:number;
    name:string;
    exercises: ExerciseInput[];
}

type ExerciseInput = {
    id?:number;
    name:string;
    sets:number;
    reps:number;

}

export {
    Role,
    UserInput,
    AuthenticationResponse,
    ProgramInput,
    WorkoutInput,
    ExerciseInput
};