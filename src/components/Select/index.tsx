import { ReactNode, SelectHTMLAttributes } from "react"
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline"
import * as S from "./styles"

export type SelectProps = {
  children: ReactNode
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <S.WrapperSelect>
      <S.MainSelect data-testid="select" {...props}>
        {children}
      </S.MainSelect>
      <ArrowIosDownwardOutline />
    </S.WrapperSelect>
  )
}
