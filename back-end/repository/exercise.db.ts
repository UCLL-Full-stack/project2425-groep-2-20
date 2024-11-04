import { Exercise } from "../model/exercise";

const exercises = [
    new Exercise({
        id:1,
        name:"squat",
        sets:3,
        reps:5,
    }),
    new Exercise({
        id:2,
        name:"bench",
        sets:3,
        reps:7,
    }),
    new Exercise({
        id:3,
        name:"deadlift",
        sets:3,
        reps:9
    })
]

const getAllExercises = (): Exercise[] => {
    return exercises;
};

export default{getAllExercises}