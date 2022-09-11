import styled, { css } from "styled-components"

export const WrapperWeatherData = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  `}
`

export const DataBox = styled.span`
  margin-left: 0.5rem;
`
