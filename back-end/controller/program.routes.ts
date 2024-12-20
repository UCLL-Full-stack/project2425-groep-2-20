import express, { NextFunction, Request, Response } from 'express';
import programService from '../service/program.service';

const programRouter = express.Router();

programRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const programs = await programService.getAllPrograms()
        res.status(200).json(programs)
    } catch (error) {
        next(error)
    }
});

export default programRouter