const getAllPrograms = async () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/programs",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
  };

  
  const ProgramService = {
    getAllPrograms,
    
  };
  
  export default ProgramService;