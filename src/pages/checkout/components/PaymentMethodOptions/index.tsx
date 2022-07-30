import { Bank, CreditCard, Money } from "phosphor-react";

import { PaymentMethodInput } from "./PaymentMethodInput";
import { PaymentMethodContainer } from "./styles";

export const paymentMethods = {
  credit: {
    label: 'Cartão de Credito',
    icon: <CreditCard size={16} />
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />
  }
}

export const PaymentMethodOptions = () => {
  
;
  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethods).map(([key, {label, icon}]) => (  // Map de Objetos
        <PaymentMethodInput 
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}         
        />
    ))}  
    </PaymentMethodContainer>
  )
}