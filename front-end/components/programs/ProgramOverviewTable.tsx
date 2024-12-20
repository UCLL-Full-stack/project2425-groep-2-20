import { Program } from "@types";
import { useState } from "react";

type Props = {
  programs: Program[];
};

const ProgramOverviewTable: React.FC<Props> = ({ programs }: Props) => {
    const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Workout Programs</h1>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Program Name</th>
            <th className="border border-gray-300 px-4 py-2">Number of Days</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr
              key={program.id}
              className="cursor-pointer hover:bg-blue-400"
              onClick={() => setSelectedProgram(program.id === selectedProgram ? null : program.id)}
            >
              <td className="border border-gray-300 px-4 py-2">{program.name}</td>
              <td className="border border-gray-300 px-4 py-2">{program.days}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProgram && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Details for Selected Program</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  {programs
                    .find((program) => program.id === selectedProgram)
                    .workouts.map((workout) => (
                      <th
                        key={workout.id}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {workout.name}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {programs
                    .find((program) => program.id === selectedProgram)
                    .workouts.map((workout) => (
                      <td
                        key={workout.id}
                        className="border border-gray-300 px-4 py-2 align-top"
                      >
                        <ul>
                          {workout.exercises.map((exercise) => (
                            <li key={exercise.id}>
                              {exercise.name} ({exercise.sets}x{exercise.reps})
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgramOverviewTable;