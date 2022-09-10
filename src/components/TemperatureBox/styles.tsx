import styled, { css } from "styled-components"

export const WrapperTemperatureBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.huge};
    height: 10rem;
    line-height: 10rem;
    text-align: center;
  `}
`
