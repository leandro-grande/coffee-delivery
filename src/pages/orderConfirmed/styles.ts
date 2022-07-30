import styled from "styled-components";


export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 5rem;

  h1 {
    font-size: 2rem;
    color: ${props => props.theme["-orange-700"]}
  }

  p {
    font-size: 1.25rem;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    line-height: 130%;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  min-width: 32rem;
  background-color: ${props => props.theme.white};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  svg {
    color: ${props => props.theme.white};
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }
`;


