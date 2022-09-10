import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { WeatherData } from "."

describe("< WeatherData />", () => {
  it("should exist in the document", () => {
    render(<WeatherData />)
    expect(screen.getByText(/plop/i)).toBeInTheDocument()
  })
})
