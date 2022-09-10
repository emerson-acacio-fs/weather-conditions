import styled, { css } from "styled-components"

export const WrapperHeader = styled.div``

export const WeatherData = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    border-top: 0.2rem solid ${theme.colors.white};
    border-bottom: 0.2rem solid ${theme.colors.white};
    padding: 0.5rem;
  `}
`
