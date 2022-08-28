import { useState } from "react";
function Registration() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (event) => {
    const target = event.target.value;
    setName(target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return name;
    // alert(`Registration as user: ${name} is complete`);
  };

  return (
    <>
      <h1>Registration</h1>
      {/* <p>User: {name}</p> */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={name || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Member:
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <p>
          {name.length > 0 ? name + " - " : null}
          {isChecked ? "member" : "not"}
        </p>
        <input name="inpSubmit" type="submit" value={"Register"} />
      </form>
    </>
  );
}

export default Registration;
