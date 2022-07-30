import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

import { InfoWithIcon } from "../../components/InfoWithIcon";
import { useCart } from "../../contexts/useCart";
import { paymentMethods } from "../checkout/components/PaymentMethodOptions";

import { Container, OrderDetailsContainer } from "./styles";

const OrderConfirmed = () => {
  const { orderDelivery } = useCart();

  return (
    <Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>   
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon 
            icon={<MapPin weight="fill" />} 
            iconBg="purple" 
            text={
              <span>
                Entrega em <strong>{orderDelivery.street}, {orderDelivery.number} {orderDelivery.complement && ` - ${orderDelivery.complement}` } </strong> 
                <br /> {orderDelivery.district} - {orderDelivery.city}, {orderDelivery.uf}
              </span>} 
            />
          <InfoWithIcon 
            icon={<Clock weight="fill" />}
            iconBg="yellow" 
            text={
              <span>
                Previsão de entrega 
                <br /> <strong>20 min - 30 min</strong>
              </span>} 
            /> 
          <InfoWithIcon 
            icon={<CurrencyDollar weight="fill" />} 
            iconBg="orange" 
            text={
              <span>
                Pagamento na entrega 
                <br /><strong>{paymentMethods[orderDelivery.payment].label}</strong>
              </span>}           
            />

        </OrderDetailsContainer>  
        <img src="/delivery.svg" alt="" />
      </section>

    </Container>
  );
}



export default OrderConfirmed;