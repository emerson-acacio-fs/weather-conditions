import { TemperatureBox } from "components/TemperatureBox"
import { WeatherBox } from "components/WeatherBox"
import { IWeatherData } from "types/IWeatherData"
import * as S from "./styles"

export type HeaderProps = {
  weather: IWeatherData
  temperature: number
}

export const Header = ({ weather, temperature }: HeaderProps) => (
  <S.WrapperHeader>
    <S.WeatherData>
      <WeatherBox title={weather.main} weatherIcon={weather.icon} />
      <TemperatureBox temperature={temperature} />
    </S.WeatherData>
    <S.Description>{weather.description}</S.Description>
  </S.WrapperHeader>
)
