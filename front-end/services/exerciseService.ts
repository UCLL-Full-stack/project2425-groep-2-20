const getAllExercises = async () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/exercises",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
  };

  
  const ExerciseService = {
    getAllExercises,
    
  };
  
  export default ExerciseService;