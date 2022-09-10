import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { WeatherBox } from "."

describe("< WeatherBox />", () => {
  it("should exist in the document", () => {
    render(<WeatherBox title="Clouds" weatherIcon="10d" />)
    const element = screen.getByAltText(/Clouds/i)
    expect(element).toHaveAttribute(
      "src",
      `http://openweathermap.org/img/wn/10d@2x.png`,
    )
    expect(element).toHaveStyle({
      width: "7rem",
      height: "7rem",
      objectFit: "cover",
    })
    const title = screen.getByText(/Clouds/i)
    expect(title).toHaveStyleRule("color", "#FAFAFA")
  })
})
