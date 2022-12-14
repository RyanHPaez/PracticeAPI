import { useEffect } from "react";
import { useState} from 'react'


function Roomapi() {
    const [data, setData]= useState(
        { }
    )
    useEffect(() => {
        fetchedData();
      }, []);

     
  const fetchedData = async () => {
    const dataResponse = await fetch(
      "https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
      {       
        method: "GET",        
        headers: {
        accept:'application/json',
          "x-functions-key": "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
        },
      }
    );
    const response=await dataResponse.json()
setData(response)
    
  };
  return (
    <div>{JSON.stringify(data)}</div>
  )}
  export default Roomapi