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
}
jest.useFakeTimers()

describe("< Header />", () => {
  it("should display the description in the specified style", () => {
    render(<Header {...props} />)
    const description = screen.queryByText(props.weather.description)
    expect(description).toHaveStyle({
      color: "#FAFAFA",
      "font-size": "1.6rem",
      "border-top": "0.2rem solid #FAFAFA",
      "border-bottom": "0.2rem solid #FAFAFA",
      padding: "0.5rem",
    })
  })
})
