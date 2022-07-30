import { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { ContentContainer, PaymentMethodInputContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodInput = ({ id, icon, label, ...props }: PaymentMethodInputProps) => {
  const { register } = useFormContext();

  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} {...register("payment")} />
      <label htmlFor={id} >
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  );
}