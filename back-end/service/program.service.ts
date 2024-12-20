import { Exercise } from "../model/exercise";
import { Program } from "../model/program";
import { Workout } from "../model/workout";
import programDb from "../repository/program.db";
import { ProgramInput } from "../types";

const getAllPrograms = async (): Promise<Program[]> => {
    const programs = await programDb.getAllPrograms();
    return programs;
};

const createProgram = async (programInput: ProgramInput): Promise<Program>  => {
    const program =  await programDb.createProgram(programInput);
    return program;
}


export default {getAllPrograms,createProgram}