import { Exercise } from "@types";

const getAllExercises = async () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/exercises",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
  };

  const deleteExercise = async (exerciseId) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/exercises/${exerciseId}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
  };

  const addExercise = async (exercise: Exercise) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/exercises`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    });
  };



  
  const ExerciseService = {
    getAllExercises,
    deleteExercise,
    addExercise
  };
  
  export default ExerciseService;