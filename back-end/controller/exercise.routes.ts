import express, { NextFunction, Request, Response } from 'express';
import exerciseService from '../service/exercise.service';
import { ExerciseInput } from '../types';

const exerciseRouter = express.Router();

exerciseRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exercises = await exerciseService.getAllExercises()
        res.status(200).json(exercises)
    } catch (error) {
        next(error)
    }
});

exerciseRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exerciseInput = <ExerciseInput>req.body
        const exercises = await exerciseService.createExercise(exerciseInput)
        res.status(200).json(exercises)
    } catch (error) {
        next(error)
    }
});

exerciseRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const course = await exerciseService.deleteExercise(Number(req.params.id));
        res.status(200).json(course);
    } catch (error) {
        next(error)
    }
});

export default exerciseRouter