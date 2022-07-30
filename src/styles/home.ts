import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: 34rem;
  background: ${props => props.theme['-purple-050']};
   
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContain = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`;

export const HeroContent = styled.div`

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 3.875rem;
    font-weight: 800;
  }

  p {
    margin-top: 2rem;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  ul {
    margin-top: 4.125rem;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.125rem;
  }
`

export const HeroImage = styled.div``;


export const MainCoffee = styled.main`
  max-width: 1120px;
  margin: 2rem auto;

  h2 {
    color: ${props => props.theme['-gray-900']};
    
  }

  > div {
    margin-top: 3.375rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`;