import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  cursor: pointer;
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  gap: 1rem;
  border-radius: 1.4375rem;
  background: var(--primary-color);
  box-shadow: 9px 4px 4px 6px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease-in-out;
  position: relative;
  img {
    width: 55%;
  }

  &:hover {
    transform: scale(1.02);
  }

  .trash {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    color: var(--text-color);
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const Content = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: var(--text-color);
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Line = styled.div`
  height: 2px;
  width: 70%;
  background-color: #c4c4c4;
`;

export const Author = styled.div`
  color: (--text-color);
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const Pages = styled.div`
  color: (--text-color);
  font-family: Poppins;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SlideLeft = keyframes`
  0% {
    transform: translateZ(700px) translateX(-400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
`;

export const CardAnimation = styled.div`
  animation: ${SlideLeft} 1s cubic-bezier(0.23, 1, 0.32, 1) both;
`;
