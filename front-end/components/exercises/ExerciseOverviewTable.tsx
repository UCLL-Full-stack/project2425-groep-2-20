import { Exercise } from "@types";

type Props = {
  exercises: Exercise[];
};

const ExerciseOverviewTable: React.FC<Props> = ({ exercises }: Props) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-center table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th scope="col" className="px-4 py-2">Exercise Name</th>
            <th scope="col" className="px-4 py-2">Sets</th>
            <th scope="col" className="px-4 py-2">Reps</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <td className="px-4 py-3 font-semibold text-gray-800">{exercise.name}</td>
              <td className="px-4 py-3 text-gray-600">{exercise.sets} Sets</td>
              <td className="px-4 py-3 text-gray-600">{exercise.reps} Repetitions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseOverviewTable;
