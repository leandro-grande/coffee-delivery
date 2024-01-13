import styled from "styled-components";



export const SectionTitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    color: ${props => props.theme['-gray-900']};
    line-height: 1.5rem;
    margin-bottom: 2rem;

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['-gray-700']};
    }
`