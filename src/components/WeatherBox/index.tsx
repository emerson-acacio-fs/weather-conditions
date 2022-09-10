import * as S from "./styles"

export type WeatherBoxProps = {
  title?: string
  weatherIcon?: string
}

export const WeatherBox = ({ title, weatherIcon = "02d" }: WeatherBoxProps) => (
  <S.WrapperWeatherBox>
    <S.WeatherImg
      src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
      alt={title}
    />
    <S.Title>{title}</S.Title>
  </S.WrapperWeatherBox>
)
