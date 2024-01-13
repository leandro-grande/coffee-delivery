import styled from "styled-components";


export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const PaymentMethodInputContainer = styled.div`

  input {
    visibility: none;
    appearance: none;
  }

  input:checked + label div {
    background: ${props => props.theme["-purple-100"]};
    border-color: ${props => props.theme["-purple-500"]};

    &:hover {
      background-color: ${props => props.theme["-purple-100"]}
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  height: 3rem;

  background: ${props => props.theme["-gray-300"]};
  color: ${props => props.theme["-gray-900"]};
  border: 1px solid ${props => props.theme["-gray-300"]};
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  transition: 0.4s;

  svg {
    color: ${props => props.theme["-purple-500"]};
  }

  &:hover {
    background: ${props => props.theme["-gray-400"]};
  }

  user-select: none;
`;