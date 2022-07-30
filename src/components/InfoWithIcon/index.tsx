import { ShoppingCart } from "phosphor-react";
import { ReactNode } from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

type InfoWithIcon = {
  icon: ReactNode
  text: string | ReactNode;
  iconBg: "orange" | "yellow" | "gray" | "purple"
}

export const InfoWithIcon = ({icon, text, iconBg }: InfoWithIcon) => {
  return (
    <InfoWithIconContainer>
        <IconContainer statusColor={iconBg}>
          {icon}
        </IconContainer>
         {typeof text == 'string' ? <span>{text}</span> : text}
    </InfoWithIconContainer>
  );
}

<ShoppingCart size={16} color="#FFFF" weight="fill" />