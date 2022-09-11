import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { Header } from "."

const props = {
  weather: {
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10n",
  },
  temperature: 55,
  feelsLike: 15,
  city: "teste",
}
jest.useFakeTimers()

describe("< Header />", () => {
  it("should display the description in the specified style", () => {
    render(<Header {...props} />)
    const description = screen.queryByText(props.weather.description)
    expect(description).toHaveStyle({
      "font-size": "1.4rem",
    })
  })
})
