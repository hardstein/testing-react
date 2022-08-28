import { fireEvent, render } from "@testing-library/react";
// import { shallow } from "enzyme";
import Registration from "./Registration";

test("Should have no value/state to begin with.", () => {
  render(<Registration />);

  const content = document.querySelector("input");
  expect(content.value).toBe("");
});

test("renders the landing page", () => {
  render(<Registration />);
});

test("CheckboxWithLabel changes the text after click", () => {
  const { getByLabelText } = render(<Registration />);
  const text = document.querySelector("p");
  const checkbox = getByLabelText("Member:");

  fireEvent.click(checkbox);

  expect(text.textContent).toBe("member");
});
