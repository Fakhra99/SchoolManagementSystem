import React from "react";
// import components here
import Sidebar from "./Components/Admin/Sidebar";
import Header from "./Components/Admin/Header";

function App() {
  return (
    <>
     <Header/>
   <div className="flex">
   
    <Sidebar/>
    
    {/* <div className="p-7">
      Home
    </div> */}
   </div>
   </>
  );
}

export default App;