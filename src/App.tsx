import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Room2, Room3,Roomapi } from "./components";
import Hamburger from "./components/Hamburger";
// import { useEffect } from "react";
// import {useState} from 'react'

function App() {
//   const [data, setData]= useState(
//     []
// )
// useEffect(() => {
//     fetchedData();
//     localStorage.setItem('dataKey', JSON.stringify(data))
//   }, []);

 
// const fetchedData = async () => {
// const dataResponse = await fetch(
//   "https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
//   {       
//     method: "GET",        
//     headers: {
//     accept:'application/json',
//       "x-functions-key": "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
//     },
//   }
// );
// const response=await dataResponse.json()
// setData(response)

// };
// return (
// <div>{JSON.stringify(data)}</div>
// )};

  return (
    
    <div className="App">
      <Hamburger
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <Router>
        <Navigation />
        <Routes> 
        <Route path="/" element={<Home />} />         
          <Route path="/Home" element={<Home  />} />
          <Route path="/Room2" element={<Room2  />} />
          <Route path="/Room3" element={<Room3 />} />
          <Route path="/Roomapi" element={<Roomapi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
