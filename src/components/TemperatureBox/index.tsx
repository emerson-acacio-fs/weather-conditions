import CountUp from "react-countup"

import * as S from "./styles"

export type TemperatureBoxProps = {
  temperature?: number
}

export const TemperatureBox = ({ temperature = 0 }: TemperatureBoxProps) => (
  <S.WrapperTemperatureBox>
    <CountUp end={temperature} duration={1} />
    °C
  </S.WrapperTemperatureBox>
)
