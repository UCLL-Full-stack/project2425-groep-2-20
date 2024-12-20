import React from "react";
import { Exercise } from "@types";
import ExerciseService from "@services/ExerciseService"

type Props = {
  exercises: Exercise[];
};

const ExerciseOverviewTable: React.FC<Props> = ({ exercises }: Props) => {

  const handleDelete = async (id: number) => {
    try {
      await ExerciseService.deleteExercise(id);
      alert("Exercise deleted successfully.");
    } catch (error) {
      console.error("Error deleting exercise", error);
      alert("Failed to delete exercise.");
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full text-center table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th scope="col" className="px-4 py-2">Exercise Name</th>
            <th scope="col" className="px-4 py-2">Sets</th>
            <th scope="col" className="px-4 py-2">Reps</th>
            <th scope="col" className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id} className="border-b bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-800">{exercise.name}</td>
              <td className="px-4 py-3 text-gray-600">{exercise.sets} Sets</td>
              <td className="px-4 py-3 text-gray-600">{exercise.reps} Repetitions</td>
              <td className="px-4 py-3 text-gray-600">
                <button 
                  onClick={() => handleDelete(exercise.id)} 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseOverviewTable;
