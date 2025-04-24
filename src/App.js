import "./App.css";
import EmployeeNot from "./components/EmployeeNot";
import Employee from "./components/Emplyee";
function App() {
  console.log("We are about to show emplyees");
  const showEmplyees = true;
  return (
    <div className="App">
      {showEmplyees ? (
        <>
          <Employee />
          <Employee />
        </>
      ) : (
        <EmployeeNot />
      )}
    </div>
  );
}

export default App;
