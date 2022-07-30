import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";

type SectionTitle = {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export const SectionTitle = ({ title, subtitle, icon }: SectionTitle) => {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>        
    </SectionTitleContainer>
  );
}