import styled from "styled-components";

export const Container = styled.section`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: var(--text-color);
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
  gap: 0.5rem;
`;

export const Radius = styled.img`
  width: 60%;
  left: 0;
  top: 0;
  position: absolute;
`;

export const CastleImg = styled.img`
  position: absolute;
  right: 5dvw;
  width: 35%;
  animation-delay: 0.4s;
`;

export const Content = styled.div`
  width: 35%;
  margin: 0 5dvw;
  font-family: "Montserrat", sans-serif;
  display: flex;
  font-size: clamp(2.4rem, 1.9602rem + 1.6999vw, 4rem);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  z-index: 1;
  color: var(--primary-color);
  font-weight: 600;
  text-align: left;
  flex-direction: column;
  animation-delay: 0.1s;
  p {
    font-weight: 400;
    margin: 0;
  }

  @media (width <= 1024px) {
    text-align: center;
  }
`;
