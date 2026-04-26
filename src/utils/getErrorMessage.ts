
export function getErrorMessage(error: any) {
    const status = error?.response?.status;
    const serverMsg = error?.response?.data?.message;

  
  if (status === 409) return "Invalid files";
  if (status === 400) return "Invalid files";
  if (status === 401) return "Server problem. please try again later";


  
  if (!error?.response) return "Network problem"

 
  return serverMsg || "Somthing went wrong";
}



