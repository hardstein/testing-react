import { render } from "@testing-library/react"
import Registration from "./Registration"

test("Should have no value/state to begin with.", () => {
    render(<Registration/>)

    const content = document.querySelector("input")
    expect(content.value).toBe("")
})

test('renders the landing page', () => {
    render(<Registration/>);
  });