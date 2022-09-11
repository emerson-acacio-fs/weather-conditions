import CountUp from "react-countup"

import * as S from "./styles"

export type TemperatureBoxProps = {
  temperature: number
  feelsLike: number
}

export const TemperatureBox = ({
  temperature,
  feelsLike,
}: TemperatureBoxProps) => (
  <S.WrapperTemperatureBox>
    <S.Temperature>
      <CountUp end={temperature} duration={1} />
      °C
    </S.Temperature>
    <S.FeelsLike>Feels lik {feelsLike} °C</S.FeelsLike>
  </S.WrapperTemperatureBox>
)
