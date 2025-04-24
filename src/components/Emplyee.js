const Employee = function (props) {
  return (
    <>
      <h1>Here is an Employee named {props.name}</h1>
      <h2>{props.role ? props.role : "No Role"}</h2>
    </>
  );
};

export default Employee;
