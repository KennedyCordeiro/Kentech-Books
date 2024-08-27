import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonStart = styled.button`
  background-color: var(--secondary-color);
  font-size: 1rem;
  width: fit-content;
  padding: 0.6rem 2rem;
  border-radius: 0.8rem;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: var(--primary-color);
  font-family: Poppins;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    transform: translateY(2px);
  }

  &:active {
    transform: scale(0.98);
  }
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
