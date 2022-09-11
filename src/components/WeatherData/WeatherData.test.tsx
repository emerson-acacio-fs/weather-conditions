import { ThermometerHalf } from "@styled-icons/bootstrap"

import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { WeatherData } from "."

const props = {
  icon: <ThermometerHalf />,
  data: "10ºC - 30°C",
  title: "Temperature",
}
describe("< WeatherData />", () => {
  it("should exist in the document", () => {
    render(<WeatherData {...props} />)
    const element = screen.getByTitle(props.title)
    expect(element).toBeInTheDocument()

    expect(element).toHaveStyle({ color: "#2E2F42", "font-size": "1.6rem" })
    const data = screen.getByText(props.data)
    expect(data).toHaveStyleRule("margin-left", "0.5rem")
  })
})
