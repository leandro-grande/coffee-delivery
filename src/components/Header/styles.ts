import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 2rem auto;
  height: 4rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.background};


  > div {
    margin: 0 auto;
    max-width: 1120px;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
`;

export const LocaleButton = styled.div`
  height: 2.375rem;

  background-color: ${props => props.theme['-purple-100']};
  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: filter 0.2s;

  span {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['-purple-700']};
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const CartButton = styled.button`
  height: 2.375rem;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: ${props => props.theme['-orange-100']};

  position: relative;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Badge = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background-color: ${props => props.theme['-orange-700']};
  color: ${props => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;