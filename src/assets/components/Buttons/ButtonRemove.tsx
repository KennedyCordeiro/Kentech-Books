import { TrashIcon } from "@radix-ui/react-icons";
import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const ButtonStart = styled.button`
  background-color: var(--secondary-color);
  width: fit-content;
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: var(--primary-color);
  font-family: Poppins;
  font-size: 1rem;
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
  img: boolean;
}

const ButtonRemove = ({ img, action, children, ...props }: ButtonProps) => {
  return (
    <ButtonStart onClick={action} {...props}>
      {img && <TrashIcon style={{ width: "1.3rem", height: "1.3rem" }} />}{" "}
      {children}
    </ButtonStart>
  );
};

export default ButtonRemove;
