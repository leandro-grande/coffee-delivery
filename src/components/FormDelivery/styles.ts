import styled from 'styled-components';

export const FormContainer = styled.section`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  row-gap: 0.75rem;
  column-gap: 1rem;

  input {
    border: 0;
    padding: 0.75rem;
    background-color: ${props => props.theme['-gray-200']};
    border: 1px solid ${props => props.theme['-gray-300']};

    outline-color: ${props => props.theme['-gray-400']};
  }

  .cep {
    grid-column: span 1;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

`;





