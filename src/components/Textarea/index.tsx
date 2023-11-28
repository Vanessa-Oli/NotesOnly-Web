import { TextareaHTMLAttributes } from "react";
import { TextareaContainer } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
}

export function Textarea({ value, ...rest }: TextareaProps) {
  return (
    <TextareaContainer
      {...rest}
    />
  )
}