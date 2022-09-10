import styled, { css } from "styled-components"

export const WrapperWeatherBox = styled.div``

export const WeatherImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    display: inline;
    color: ${theme.colors.white};
  `}
`
