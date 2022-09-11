import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { TemperatureBox } from "."

jest.useFakeTimers()
describe("< TemperatureBox />", () => {
  it("should run the temperature value animation", () => {
    render(<TemperatureBox temperature={25} feelsLike={5} />)
    expect(screen.queryByText("25")).not.toBeInTheDocument()
    jest.runAllTimers()
    expect(screen.getByText("25")).toBeInTheDocument()
    expect(screen.getByText("Feels lik 5 °C")).toBeInTheDocument()
  })
  it("should have the specified style", () => {
    render(<TemperatureBox temperature={25} feelsLike={5} />)
    jest.runAllTimers()
    const element = screen.getByText("25")
    expect(element.parentNode).toHaveStyleRule("font-size", "5.2rem")
    expect(screen.getByText("Feels lik 5 °C")).toHaveStyleRule(
      "font-size",
      "1.6rem",
    )
  })
})
