import React, { useEffect, useState } from "react";
import "./App.css";
import getData from "./APIcall";


function App() {
  
  const [data,setData] = useState(null) 
  
  useEffect(() => {
    // Call our fetch function below once the component mounts
    getData()
      .then(res => setData(res.express))
      .catch(err => console.log(err)); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;




