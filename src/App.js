import "./App.css";
import EmployeeNot from "./components/EmployeeNot";
import Employee from "./components/Emplyee";
import { useState } from "react";
function App() {
  const [role, setRole] = useState("dev");
  const showEmplyees = true;
  return (
    <div className="App bg-red-300">
      {showEmplyees ? (
        <>
          <input
            input="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Israq" role="Soft Engineer" />
          <Employee name="John" role={role} />
        </>
      ) : (
        <EmployeeNot />
      )}
    </div>
  );
}

export default App;
