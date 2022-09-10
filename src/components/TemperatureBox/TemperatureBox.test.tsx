import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { TemperatureBox } from "."

jest.useFakeTimers()
describe("< TemperatureBox />", () => {
  it("should run the temperature value animation", () => {
    render(<TemperatureBox temperature={25} />)
    expect(screen.queryByText("25")).not.toBeInTheDocument()
    jest.runAllTimers()
    expect(screen.getByText("25")).toBeInTheDocument()
  })
  it("should have the specified style", () => {
    render(<TemperatureBox temperature={25} />)
    jest.runAllTimers()
    const element = screen.getByText("25")
    expect(element.parentNode).toHaveStyle({
      height: "10rem",
      lineHeight: "10rem",
      "text-align": "center",
      color: "#FAFAFA",
      "font-size": "5.2rem",
    })
  })
})
