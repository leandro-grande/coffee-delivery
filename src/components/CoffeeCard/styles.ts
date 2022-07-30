import styled from 'styled-components';

export const Container = styled.div`
  height: 19.375rem;
  width: 16rem;
  background: ${props => props.theme['-gray-100']};
  border-radius: 6px 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
  }
  
  span {
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme['-orange-100']};
    color: ${props => props.theme['-orange-700']};
    border-radius: 100px;
    
    font-size: 0.625rem;
    font-weight: 700;
    
  }

  strong {
    margin-top: 1rem;
    font-family: 'baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${props => props.theme['-gray-700']};
  }

  p {
    margin-top: 0.5rem;

    font-size: 0.875rem;
    color: ${props => props.theme['-gray-500']};
    text-align: center;
    line-height: 1.125rem;
  }

`;

export const CardCart = styled.div`
  flex: 1;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    font-size: 0.875rem;
    margin-right: 1rem;

    strong {
      font-family: 'baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
  
`;

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 2.375rem;
  margin-right: 0.875rem;  
  background: ${props => props.theme['-gray-300']};
  border-radius: 6px;
  

  input {
    width: 1.125rem;
    text-align: center;
    border: 0;
    background-color: transparent;

    font-size: 1rem;
    color: ${props => props.theme['-gray-700']};
    font-weight: 700;
    outline: none;
  }

  button {
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  
    border-radius: 8px;
    height: 2.375rem;
    border: 0;
    background: transparent;

    font-size: 2rem;
    color: ${props => props.theme['-purple-500']};   
    transition: background 0.2s;

    &:hover {
      color: ${props => props.theme['-orange-700']}; ;  
    }
  }
`;

export const CartButton = styled.button`
  height: 2.375rem;
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  background: ${props => props.theme['-purple-700']};
  transition: background 0.2s;

  &:hover {
      background: ${props => props.theme['-purple-500']};  
    }
`;