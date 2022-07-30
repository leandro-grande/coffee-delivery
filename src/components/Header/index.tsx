import Router from "next/router";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../contexts/useCart";
import { Badge, CartButton, HeaderContainer, LocaleButton } from "./styles";


export const Header = () => {
  const { carts } = useCart();

  const handleCheckout = () => {
    if (carts.length === 0) {
      return;
    }

    Router.push('/checkout');
  }

  return (
    <HeaderContainer>
      <img src="logo-coffee.svg" alt="" />

      <nav>
        <LocaleButton>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <span>São Paulo, SP</span>
        </LocaleButton>
        <CartButton onClick={handleCheckout}>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          {carts.length > 0 && <Badge>{carts.length}</Badge>}
        </CartButton>
      </nav>
      
    </HeaderContainer>
  );
}