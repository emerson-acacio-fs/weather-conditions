import styled, { css } from "styled-components"

export const Hr = styled.hr`
  ${({ theme }) => css`
    border-top: 0.1rem solid ${theme.colors.darkGray};
    margin-bottom: 1rem;
  `}
`
export const WeatherWrapper = styled.main`
  border-radius: 0.3rem;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  width: 60rem;
  padding: 1.5rem;
`
export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`

export const LoaderWrapper = styled.main`
  position: absolute;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(53, 98, 221, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ErrorMessageWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.red};
`
