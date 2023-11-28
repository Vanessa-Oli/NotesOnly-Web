import { ButtonHTMLAttributes } from "react";
import { RingLoader } from "../RingLoader";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {

  return (
    <ButtonContainer
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? <RingLoader /> : title}
    </ButtonContainer>
  )
}