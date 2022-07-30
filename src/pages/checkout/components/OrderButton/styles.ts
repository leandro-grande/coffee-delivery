import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  height: 2.875rem;
  padding: 0.875rem 0.5rem;
  border: 0;
  border-radius: 6px;

  background-color: ${props => props.theme["-orange-500"]};
  color: ${props => props.theme.white};
  font-weight: 700;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  
`;