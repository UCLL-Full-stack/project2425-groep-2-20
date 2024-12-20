import { Program } from "../model/program";
import programDb from "../repository/program.db";

const getAllPrograms = async (): Promise<Program[]> => {
    const programs = await programDb.getAllPrograms();
    return programs;
};

export default {getAllPrograms}