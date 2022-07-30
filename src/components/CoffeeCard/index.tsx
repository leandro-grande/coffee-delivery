import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

import { useCart } from "../../contexts/useCart";
import { AddToCart, CardCart, CartButton, Container } from "./styles";

type Product = {
  id: string;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

type CoffeeCardProps = {
  product: Product;
}

export const CoffeeCard = ({ product }: CoffeeCardProps) => {
  const [totalCoffee, setTotalCoffee] = useState(0);
  const { addOrder } = useCart();

  const handleAddToCard = () => {
    setTotalCoffee((state) => state + 1)
  }

  const handleRemoveToCard = () => {
    setTotalCoffee((state) => state != 0 ? state - 1 : 0)
  }

  const handleAddToCart = () => {
    const coffeeToAdd = {
      id: uuid(),
      product: {...product},
      amount: totalCoffee
    }

    addOrder(coffeeToAdd);
  }


  return (
    <Container>
      <img src={product.imageUrl} alt="" />
      <span>{product.tag}</span>
      <strong>{product.title}</strong>
      <p>{product.description}</p>
      
      <CardCart>
        <p>R$ <strong>{product.price.toFixed(2)}</strong></p>
        <AddToCart>
          <button 
            type="button"
            onClick={handleRemoveToCard}
          >
            
            <Minus size={14}  weight="fill" />
            </button>

          <input 
            type="text" placeholder="0"
            value={totalCoffee}
            onChange={e => setTotalCoffee(totalCoffee)}
          />

          <button 
            type="button" 
            onClick={handleAddToCard}
          >
            <Plus size={14} weight="fill" />
            </button>
        </AddToCart>
        <CartButton onClick={handleAddToCart}>
          <ShoppingCart size={22} color="#FFFF" weight="fill" />
        </CartButton>
      </CardCart>
    </Container>
  );
}