import { screen, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Registration from "./Registration";

// https://testing-playground.com/

test("Renders component registration page", () => {
  render(<Registration />);
});

test("Input for name should be empty to begin with.", () => {
  render(<Registration />);
  expect(getNameInput().value).toBe("");
});

test("Member checkbox changes to checked when clicked.", () => {
  render(<Registration />);

  expect(getMemberCheckbox().checked).toEqual(false);

  fireEvent.click(getMemberCheckbox());

  expect(getMemberCheckbox().checked).toEqual(true);
});

test("Name will update correctly with value from input.", () => {
  render(<Registration />);

  expect(getNameInput().value).toBe("");

  userEvent.type(getNameInput(), "Per");

  expect(getNameInput().value).toBe("Per");
});

test("Name input value will not update with numbers.", () => {
  render(<Registration />);

  expect(getNameInput().value).toBe("");

  userEvent.type(getNameInput(), "1Per1");

  expect(getNameInput().value).toBe("Per");
});

test("Age will update correctly with value from input.", () => {
  render(<Registration />);

  fireEvent.change(getAgeInput(), {
    target: { value: 12 },
  });

  expect(Number(getAgeInput().value)).toBe(12);
});

test("Age input value will only accept numbers.", () => {
  render(<Registration />);

  userEvent.type(getAgeInput(), "12letter");

  expect(Number(getAgeInput().value)).toBe(0);
});

test("Form show error text when input is missing and submit is clicked.", () => {
  render(<Registration />);

  expect(getNameInput().value).toBe("");

  userEvent.click(getRegisterButton());

  expect(getErrorTextName().innerHTML).toBe("Name is required!");
});

test("Form show registration complete when submit is clicked with correct input.", () => {
  render(<Registration />);

  fireEvent.change(getAgeInput(), {
    target: { value: 12 },
  });

  userEvent.type(getNameInput(), "Per");

  userEvent.click(getRegisterButton());
  expect(getHeadingSubmit().innerHTML).toBe("Registration complete.");
});

function getNameInput() {
  return screen.getByRole("textbox", {
    name: /username:/i,
  });
}

function getAgeInput() {
  return screen.getByRole("spinbutton", {
    name: /age:/i,
  });
}

function getMemberCheckbox() {
  return screen.getByRole("checkbox", {
    name: /member:/i,
  });
}

function getHeadingSubmit() {
  return document.querySelector("#isSubmitText");
}

function getErrorTextName() {
  return document.querySelector("#errorName");
}

function getRegisterButton() {
  return screen.getByRole("button", {
    name: /register/i,
  });
}
