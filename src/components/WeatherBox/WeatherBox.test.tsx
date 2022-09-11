import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { WeatherBox } from "."

describe("< WeatherBox />", () => {
  it("should display the icon image", () => {
    render(
      <WeatherBox
        title="Clouds"
        weatherIcon="10d"
        description="test"
        city="City"
      />,
    )
    const element = screen.getByAltText(/Clouds/i)
    expect(element).toHaveAttribute(
      "src",
      `http://openweathermap.org/img/wn/10d@2x.png`,
    )
  })
  it("should have the specified style", () => {
    render(
      <WeatherBox
        title="Clouds"
        weatherIcon="10d"
        description="test"
        city="City"
      />,
    )
    const element = screen.getByAltText(/Clouds/i)
    expect(element).toHaveStyle({
      width: "10rem",
      height: "10rem",
      objectFit: "cover",
    })
    const title = screen.getByText(/Clouds/i)
    expect(title).toHaveStyleRule("font-size", "2.0rem")
  })
})
