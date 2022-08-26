import { useState } from "react";
function Registration() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    const target = event.target.value;
    setName(target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Registration as user: ${name} is complete`);
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
        <input type="submit" value={"Register"} />
      </form>
    </>
  );
}

export default Registration;
