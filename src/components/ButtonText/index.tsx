import { ButtonHTMLAttributes } from 'react';
import { ButtonTextContainer, ButtonTextContainerProps } from './styles';

type ButtonTextProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonTextContainerProps & {
  title: string;
}

export function ButtonText({ title, isActive = false, ...rest }: ButtonTextProps) {
  return (
    <ButtonTextContainer
      type="button"
      isActive={isActive}
      {...rest}
    >
      {title}
    </ButtonTextContainer>
  )
}