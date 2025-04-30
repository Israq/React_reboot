import "./App.css";
import EmployeeNot from "./components/EmployeeNot";
import Employee from "./components/Emplyee";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/10171447/pexels-photo-10171447.png",
    },
    {
      id: 2,
      name: "John",
      role: "System Architect",
      img: "https://images.pexels.com/photos/10131167/pexels-photo-10131167.jpeg",
    },
    {
      id: 3,
      name: "Melanie",
      role: "Sr. Developer",
      img: "https://images.pexels.com/photos/3762952/pexels-photo-3762952.jpeg",
    },
    {
      id: 4,
      name: "Richard",
      role: "CEO",
      img: "https://images.pexels.com/photos/13758252/pexels-photo-13758252.jpeg",
    },
  ]);
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      return id === employee.id
        ? { ...employee, name: newName, role: newRole }
        : //Creates a new object with all existing employee properties (...employee)
          //Overwrites just the name and role properties
          //Keeps all other properties (like img, id, etc.) unchanged
          employee;
    });
    setEmployees(updatedEmployees);
  }
  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmplyees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      <Header />
      <div class="flex flex-wrap justify-center">
        {employees.map((employee) => {
          const editEmployee = (
            <EditEmployee
              name={employee.name}
              role={employee.role}
              updateEmployee={updateEmployee}
              id={employee.id}
            />
          );
          return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              editEmployee={editEmployee}
            />
          );
        })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
    </div>
  );
}

export default App;
