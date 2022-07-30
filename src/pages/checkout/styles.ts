import styled from 'styled-components';

export const CompleteOrderContainer = styled.form`
  max-width: 1120px;
  margin: 2.5rem auto;

  display: flex;
  gap: 2rem;
`;

export const OrderContent = styled.div`
  width: 40rem;
  
  
    h3 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
    }
`;

export const OrderDeliverySection = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;

  background: ${props => props.theme['-gray-100']};

  .buttonArea {
    display: flex;
    gap: 0.75rem;
  }
`;



export const SelectedCoffeesContent = styled.div`
  flex: 1;

    h3 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
    }

`;

export const SelectedCoffees = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px 44px;
  
  background: ${props => props.theme['-gray-100']};

  span {
    display: block;
    font-size: 0.875rem;
    color: ${props => props.theme['-gray-500']};
  }

  strong {
    color: ${props => props.theme['-gray-900']};
  }

  .total {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.7rem;
      text-align: left;
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.7rem;
      text-align: right;
    }
  }
`;

