import { ReactNode } from "react";
import { Container } from "./styles";

type OrderButtonProps = {
  children: ReactNode;
}

export const OrderButton = ({ children }: OrderButtonProps) => {
  return (
    <Container type="submit">
      {children}
    </Container>
  );
}