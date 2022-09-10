import { ComponentStory, ComponentMeta } from "@storybook/react"

import { WeatherData } from "."

export default {
  title: "WeatherData",
  component: WeatherData,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof WeatherData>

export const Default: ComponentStory<typeof WeatherData> = (args) => (
  <WeatherData {...args} />
)
