import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { Input } from "."

describe("< Input />", () => {
  it("should have the specified style", () => {
    render(<Input value="test" />)

    const input = screen.getByDisplayValue("test")
    expect(input).toHaveStyle({
      color: "#2E2F42",
      "font-size": "1.6rem",
      padding: "0.8rem",
      background: "transparent",
      border: "none",
      "border-bottom": "0.1rem solid #8F8F8F",
      outline: "none",
      width: "30rem",
    })
  })
  it("should have a blue border when it is in focus", () => {
    render(<Input value="test" />)

    const input = screen.getByDisplayValue("test")
    expect(input).toHaveStyleRule("border-color", "#007eff", {
      modifier: ":focus",
    })
  })
})
