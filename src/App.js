import "./App.css";
import EmployeeNot from "./components/EmployeeNot";
import Employee from "./components/Emplyee";
import { useState } from "react";
function App() {
  const [role, setRole] = useState("dev");
  const showEmplyees = true;
  return (
    <div className="App">
      {showEmplyees ? (
        <>
          <input
            input="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div class="flex flex-wrap">
            <Employee
              name="Israq"
              role="Soft Engineer"
              img="https://images.pexels.com/photos/10131167/pexels-photo-10131167.jpeg"
            />
            <Employee
              name="John"
              role={role}
              img="https://images.pexels.com/photos/2072456/pexels-photo-2072456.jpeg"
            />
            <Employee
              name="Israq"
              role="Soft Engineer"
              img="https://images.pexels.com/photos/10131167/pexels-photo-10131167.jpeg"
            />
            <Employee
              name="John"
              role={role}
              img="https://images.pexels.com/photos/2072456/pexels-photo-2072456.jpeg"
            />
            <Employee
              name="Israq"
              role="Soft Engineer"
              img="https://images.pexels.com/photos/10131167/pexels-photo-10131167.jpeg"
            />
            <Employee
              name="John"
              role={role}
              img="https://images.pexels.com/photos/2072456/pexels-photo-2072456.jpeg"
            />
          </div>
        </>
      ) : (
        <EmployeeNot />
      )}
    </div>
  );
}

export default App;
