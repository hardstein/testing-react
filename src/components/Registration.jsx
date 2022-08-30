import { useState } from "react";
function Registration() {
  const initialValues = { name: "", age: "", member: false };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.age) {
      errors.age = "Age is required!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <h1 id="isSubmitText">{isSubmit && Object.keys(formErrors).length === 0 ? "Registration complete." : null}</h1>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={formValues.name}
            // Valiation on characters is done with onChange
            onChange={(e) =>
              setFormValues({
                ...formValues,
                name: e.target.value.replace(/[^A-Za-z]/g, ""),
              })
            }
          />
        </label>
        <p className="errorText" id="errorName">{formErrors.name}</p>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={formValues.age}
            onChange={(e) =>
              setFormValues({ ...formValues, age: e.target.value })
            }
          />
        </label>
        <p className="errorText">{formErrors.age}</p>
        <label>
          Member:
          <input
            type="checkbox"
            checked={formValues.member}
            onChange={(e) =>
              setFormValues({ ...formValues, member: !formValues.member })
            }
          />
        </label>
        <input name="inpSubmit" type="submit" value={"Register"} />
      </form>
    </>
  );
}

export default Registration;
