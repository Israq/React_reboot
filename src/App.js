import "./App.css";
import EmployeeNot from "./components/EmployeeNot";
import Employee from "./components/Emplyee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/10171447/pexels-photo-10171447.png",
    },
    {
      name: "John",
      role: "System Architect",
      img: "https://images.pexels.com/photos/10131167/pexels-photo-10131167.jpeg",
    },
    {
      name: "Melanie",
      role: "Sr. Developer",
      img: "https://images.pexels.com/photos/3762952/pexels-photo-3762952.jpeg",
    },
    {
      name: "Richard",
      role: "CEO",
      img: "https://images.pexels.com/photos/13758252/pexels-photo-13758252.jpeg",
    },
  ]);
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
          <div class="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <EmployeeNot />
      )}
    </div>
  );
}

export default App;
