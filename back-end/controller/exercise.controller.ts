import express, { NextFunction, Request, Response } from 'express';
import exerciseService from '../service/exercise.service';

const exerciseRouter = express.Router();

exerciseRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exercises = await exerciseService.getAllExercises()
        res.status(200).json(exercises)
    } catch (error) {
        next(error)
    }
});

export default exerciseRouter