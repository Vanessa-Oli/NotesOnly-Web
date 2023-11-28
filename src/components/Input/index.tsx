import { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { InputContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ComponentType<IconBaseProps>;
}

export function Input({ icon: Icon = undefined, ...rest }: InputProps) {
  return (
    <InputContainer
      {...rest}
    >
      {Icon && <Icon size={20} />}
      <input
        type="text"
        {...rest}
      />
    </InputContainer>
  );
}