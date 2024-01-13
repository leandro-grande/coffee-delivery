import { DeepRequired, FieldErrorsImpl } from "react-hook-form";
import { PaymentMethods } from "../pages/checkout";



export function formErrorMapper(errors: FieldErrorsImpl<DeepRequired<{ number: string; cep: string; street: string; complement: string; district: string; city: string; uf: string; payment: PaymentMethods; }>>) {


  return errors.cep?.message || errors.street?.message || errors.number?.message || errors.complement?.message ||
    errors.district?.message || errors.city?.message || errors.uf?.message || errors.payment?.message;
}