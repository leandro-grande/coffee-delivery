import { produce } from 'immer';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { productsData } from '../data/products';

type CartProviderProps = {
  children: ReactNode;
}

export type Product = {
  id: string;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

type Cart = {
  id: string;
  product: Product;
  amount: number;
}

type OrderDelivery = {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  payment: "credit" | "debit" | "money";
}

const CartContext = createContext({} as CartContextData);

type CartContextData = {
  products: Product[];
  carts: Cart[];
  orderDelivery: OrderDelivery;
  addOrder: (cartItem: Cart) => void;
  updateOrder: (productId: string, amount: number) => void;
  removeOrder: (productId: string) => void;
  sendDelivery: (data: OrderDelivery) => void;
}

export const CartContextProvider = ({children}: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [carts, setCarts] = useState<Cart[]>([]);
  const [orderDelivery, setOrderDelivery] = useState({} as OrderDelivery);


  const addOrder = (cartItem: Cart) => {
    if (!cartItem.amount) {
      return
    }

    const cartCoffeeExists = carts.findIndex(cart => cart.product.id === cartItem.product.id);

    const newCart = produce(carts, (draft) => {
      if (cartCoffeeExists < 0) {
        draft.push(cartItem)
      } else {
        draft[cartCoffeeExists].amount = cartItem.amount + 1;
      }
    })

    setCarts(newCart)
  }

  const updateOrder =  (productId: string, amount: number) => {
    const cartIndex = carts.findIndex(cart => cart.product.id === productId);

    const updateCart = produce(carts, (draft) => {
      draft[cartIndex].amount  = amount
    })

    setCarts(updateCart)
  }

  const removeOrder = (productId: string) => {
    const updateCart = carts.filter(cart => cart.product.id !== productId);

    setCarts(updateCart);
  }

  const sendDelivery = (data: OrderDelivery) => {
    setOrderDelivery(data);
  }

  useEffect(() => {

    setProducts(productsData);
  }, []);

  return (
    <CartContext.Provider value={{ 
      products, 
      carts, 
      orderDelivery, 
      addOrder, removeOrder, 
      updateOrder, 
      sendDelivery 
    }}>
      
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext);
}