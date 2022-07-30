import { v4 as uuid } from 'uuid';
import { Product } from '../contexts/useCart';

export const productsData: Product[] = [
  {
    id: uuid(),
    imageUrl: 'coffee-1.png',
    tag: 'TRADICIONAL',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 7.00,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-2.png',
    tag: 'TRADICIONAL',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 7.50,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-3.png',
    tag: 'TRADICIONAL',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 8.00,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-4.png',
    tag: 'TRADICIONAL',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 8.00,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-5.png',
    tag: 'TRADICIONAL COM LEITE',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.00,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-6.png',
    tag: 'TRADICIONAL COM LEITE',
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.00,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-7.png',
    tag: 'TRADICIONAL COM LEITE',
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.50,
  },
  {
    id: uuid(),
    imageUrl: 'coffee-8.png',
    tag: 'TRADICIONAL COM LEITE',
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.50,
  },
]