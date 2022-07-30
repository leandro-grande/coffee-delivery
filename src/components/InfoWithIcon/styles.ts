import styled from "styled-components";

const STATUS_COLORS = {
  orange: '-orange-700',
  yellow: '-orange-500',
  gray: '-gray-700',
  purple: '-purple-500',
} as const;

type IconContainerProps = {
  statusColor: keyof typeof STATUS_COLORS;
}

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`; 

export const IconContainer = styled.div<IconContainerProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};

  display: flex;
  align-items: center;
  justify-content: center;
`;