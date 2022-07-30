import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.125rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme['-gray-300']};
  margin-bottom: 1.5rem;
 
  .coffee-buttons {
    display: flex;
    margin-top: 0.5rem;
  }
  
  img {
    width: 4rem;
  }

  strong {
    margin-left: auto;
  }
`;

export const AddToCart = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 2rem;
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
    height: 2rem;
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

export const RemoveCoffeeButton = styled.button`
  border: 0;
  border-radius: 8px;
  background-color: ${props => props.theme['-gray-300']};
  padding: 0.125rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2s;

  &:hover {
      background: ${props => props.theme['-gray-400']}; ;  
    }
`

