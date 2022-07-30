import type { NextPage } from 'next'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from '../components/CoffeeCard'
import { InfoWithIcon } from '../components/InfoWithIcon'
import { useCart } from '../contexts/useCart'
import { HeroContain, HeroContainer, HeroContent, HeroImage, MainCoffee } from '../styles/home'

const Home: NextPage = () => {
  const { products } = useCart();

  return (
    <>
      <HeroContainer>
        <HeroContain>
          <HeroContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            
            <ul>
              <InfoWithIcon 
                icon={<ShoppingCart size={16} weight="fill" color="#FFF" />} iconBg="orange" text="Compra simples e segura"  
              />
              <InfoWithIcon 
                icon={<Package size={16} weight="fill" color="#FFF" />} iconBg="gray" text="Embalagem mantém o café intacto"  
              />
              <InfoWithIcon 
                icon={<Timer size={16} weight="fill" color="#FFF" />} iconBg="yellow" text="Entrega rápida e rastreada"  
              />
              <InfoWithIcon 
                icon={<Coffee size={16} weight="fill" color="#FFF" />} iconBg="purple" text="O café chega fresquinho até você"  
              />              
            </ul>
            
          </HeroContent>
          <HeroImage>
            <img src="/hero-coffee.png" alt="" />
          </HeroImage>
        </HeroContain>
      </HeroContainer>
      <MainCoffee>
        <h2>Nossos Cafés</h2>
        <div>
          {products.map(product => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </MainCoffee>
    </>
  )
}


export default Home
