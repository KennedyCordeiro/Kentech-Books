import styled, { keyframes } from "styled-components";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

const Fade = keyframes`
    0% {
      transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  `;

const slideInEllipticTop = keyframes`
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  `;

const ModalDiv = styled.div`
  display: none;
  &.active {
    display: flex;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(84, 83, 83, 0.072);
    backdrop-filter: blur(5.25px);
    z-index: 10;
    align-items: center;
    justify-content: center;
    animation: ${Fade} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

export const Content = styled.div`
  /* position: absolute;
  top: 30%;
  left: 45%; */
  animation: ${slideInEllipticTop} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation-delay: 0.2s;
  width: 50vw;
  min-height: 30vh;
  background: var(--primary-color);
  padding: 1em 1.5rem;
  border: 2px solid #fff;
  border-radius: 2em;
  flex-direction: column;

  @media (width <= 1024px) {
    width: 95vw;
    height: auto;
  }
  .close {
    position: absolute;
    top: 4%;
    right: 4%;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const Title = styled.div`
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: 500;
`;

interface ModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOpen?: Boolean;
  children: ReactNode;
  onClose: () => void;
  title: string;
}

const Modal = ({ onOpen = false, children, onClose, title }: ModalProps) => {
  return (
    <ModalDiv className={onOpen && "active"}>
      <Content>
        <Cross1Icon className="close" onClick={onClose} />
        <Title>{title}</Title>

        {children}
      </Content>
    </ModalDiv>
  );
};

export default Modal;
