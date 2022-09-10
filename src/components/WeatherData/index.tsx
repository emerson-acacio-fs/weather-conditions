import * as S from "./styles"

export type WeatherDataProps = {
  title?: string
}

export const WeatherData = ({ title = "plop" }: WeatherDataProps) => (
  <S.WrapperWeatherData>
    <h1>{title}</h1>
  </S.WrapperWeatherData>
)
