import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../../../contexts/useCart";
import { AddToCart, Container, RemoveCoffeeButton } from "./styles";

type Product = {
  id: string;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

type Cart = {
  product: Product;
  amount: number;
}

type CoffeeOrderProps = {
  cart: Cart;
}

export const CoffeeOrder = ({ cart }: CoffeeOrderProps) => {
  const { updateOrder, removeOrder } = useCart();

  const total = (cart.amount * cart.product.price).toFixed(2);

  const handleDecreaseCoffee = () => {
    const amount = cart.amount === 1 ? 1 : cart.amount - 1

    updateOrder(cart.product.id, amount);
  }
  
  const handleAddCoffee = () => {
    const amount = cart.amount + 1

    updateOrder(cart.product.id, amount);
  }

  return (
    <Container>
      <img src={cart.product.imageUrl} alt="" />
      <div className="coffee-item">
        <span>{cart.product.title}</span>
        
        <div className="coffee-buttons">
          <AddToCart>
            <button 
              type="button"
              onClick={handleDecreaseCoffee}
            >
              <Minus size={14}  weight="fill" />
              </button>

            <input 
              type="text" placeholder="0"
              value={cart.amount}
            />
            <button 
              type="button" 
              onClick={handleAddCoffee} 
            >
              <Plus size={14} weight="fill" />
              </button>
          </AddToCart>

          <RemoveCoffeeButton onClick={() => removeOrder(cart.product.id)}>
            <Trash size={16} color="#8047F8" />
            Remover
          </RemoveCoffeeButton>
        </div>
      </div>
      <strong>R$ {total}</strong>
    </Container>
  );
}