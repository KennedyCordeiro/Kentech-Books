import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonStart = styled.button`
  background-color: var(--secondary-color);
  font-size: 1.4rem;
  width: fit-content;
  padding: 0.6rem 2rem;
  border-radius: 0.6rem;
  font-weight: 500;
  border: 0;
  cursor: pointer;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: () => void;
  children: ReactNode;
}

const ButtonStarted = ({ action, children, ...props }: ButtonProps) => {
  return (
    <ButtonStart onClick={action} {...props}>
      {children}
    </ButtonStart>
  );
};

export default ButtonStarted;
