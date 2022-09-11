import { fireEvent, screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { Select } from "."

describe("< Header />", () => {
  it("should correctly set default option", () => {
    render(
      <Select defaultValue={2}>
        <option value={1}>oi</option>
        <option value={2}>oi2</option>
        <option value={3}>oi3</option>
      </Select>,
    )

    expect(
      (
        screen.getByRole("option", {
          name: "oi2",
        }) as HTMLOptionElement
      ).selected,
    ).toBe(true)
  })
  it("should display the correct number of options", () => {
    render(
      <Select defaultValue={2}>
        <option value={1}>oi</option>
        <option value={2}>oi2</option>
        <option value={3}>oi3</option>
      </Select>,
    )
    expect(screen.getAllByRole("option").length).toBe(3)
  })
  it("should switch to the selected option", () => {
    render(
      <Select defaultValue={1}>
        <option value={1}>oi</option>
        <option value={2}>oi2</option>
        <option value={3}>oi3</option>
      </Select>,
    )
    expect(
      (
        screen.getByRole("option", {
          name: "oi2",
        }) as HTMLOptionElement
      ).selected,
    ).toBe(false)

    fireEvent.change(screen.getByTestId("select"), {
      target: { value: 2 },
    })
    expect(
      (
        screen.getByRole("option", {
          name: "oi2",
        }) as HTMLOptionElement
      ).selected,
    ).toBe(true)
  })
})
