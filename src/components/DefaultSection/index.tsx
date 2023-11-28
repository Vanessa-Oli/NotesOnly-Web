import { ReactNode } from "react";
import { DefaultSectionContainer } from "./styles";

interface DefaultSectionProps {
  title: string;
  children: ReactNode;
} 

export function DefaultSection({ title, children }: DefaultSectionProps) {
  return (
    <DefaultSectionContainer>
      <h2>{title}</h2>
      {children}
    </DefaultSectionContainer>
  )
}