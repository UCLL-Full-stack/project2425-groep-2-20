import express, { NextFunction, Request, Response } from 'express';
import programService from '../service/program.service';
import { ProgramInput } from '../types';

const programRouter = express.Router();

programRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const programs = await programService.getAllPrograms()
        res.status(200).json(programs)
    } catch (error) {
        next(error)
    }
});

programRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const programInput = <ProgramInput>req.body;
        const program = await programService.createProgram(programInput);
        res.status(200).json(program);
    } catch (error) {
        next(error);
    }
});

export default programRouter