import { zodResolver } from '@hookform/resolvers/zod';
import Router from 'next/router';
import { CurrencyDollar, MapPin } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod';

import { useCart } from "../../contexts/useCart";
import { CoffeeOrder } from "./components/CoffeeOrder";
import { FormDelivery } from "./components/FormDelivery";
import { OrderButton } from "./components/OrderButton";
import { PaymentMethodOptions } from './components/PaymentMethodOptions';
import { SectionTitle } from './components/SectionTitle';

import { formErrorMapper } from '../../utils/formErrorMapper';
import {
  CompleteOrderContainer,
  FormError,
  OrderContent, OrderDeliverySection, SelectedCoffees,
  SelectedCoffeesContent
} from "./styles";

export enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe o CEP"),
  street: zod.string().min(1, 'Informe o endereço'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().min(1, 'Informe o complemento'),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
  payment: zod.nativeEnum(PaymentMethods, {
    errorMap: (issue, ctx) => {
      return {message: 'Informe a opção de pagamento'};
    },
  })
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

const Checkout = () => {
  const { carts, sendDelivery } = useCart();

  const OrderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema)
  });

  const { handleSubmit, formState: { errors } } = OrderForm;

  const deliveryPrice = 3.50;

  const totalCoffee = carts.reduce((acc, transaction) => {
    const value = transaction.amount * transaction.product.price

    acc += value;

    return acc;
  }, 0);

  const total = totalCoffee + deliveryPrice;

  const handleSendOrder = (data: OrderFormData) => {
    sendDelivery(data);

    Router.push('/orderConfirmed');
  }

  return (
    <FormProvider {...OrderForm}>
      <CompleteOrderContainer onSubmit={handleSubmit(handleSendOrder)}>
        <OrderContent>
          <h3>Complete seu pedido</h3>
          <OrderDeliverySection>
            
            <SectionTitle 
              title='Endereço de Entrega' 
              subtitle='Informe o endereço onde deseja receber seu pedido' 
              icon={<MapPin size={22} color="#DBAC2C" />}
            />  
          
            <FormDelivery />
            
            {formErrorMapper(errors) && <FormError>* {formErrorMapper(errors)}</FormError> }
            
            
          </OrderDeliverySection>

          <OrderDeliverySection>
            <SectionTitle 
                title='Pagamento' 
                subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar' 
                icon={<CurrencyDollar size={22} color="#8047F8" />}
              /> 
            
            <PaymentMethodOptions />

          </OrderDeliverySection>
        </OrderContent>
        
        <SelectedCoffeesContent>
          <h3>Cafés selecionados</h3>
          <SelectedCoffees>

            {carts.map(cart => (
              <CoffeeOrder key={cart.id} cart={cart} />
            ))}

            <div className="total">
              <div className="left">
                <span>Total de itens</span>
                <span>Entrega</span>
                <strong>Total</strong>
              </div>
              
              <div className="right">
                <span>R$ {totalCoffee.toFixed(2)}</span>
                <span>R$ {deliveryPrice.toFixed(2)}</span>
                <strong>R$ {total.toFixed(2)}</strong>
              </div>
            </div>
            
            <OrderButton>
              CONFIRMAR PEDIDO
            </OrderButton>

          </SelectedCoffees>
        </SelectedCoffeesContent>
      </CompleteOrderContainer>
    </FormProvider>
  );
}

export default Checkout;