import styled from "styled-components";

export const Container = styled.section`
  height: 85dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
  gap: 0.5rem;

  @media (width <= 1024px) {
    height: 90dvh;
  }
`;

export const BooksImg = styled.img``;

export const Content = styled.div`
  width: 100%;
  border-radius: 0rem 0rem 3.75rem 3.75rem;
  background: linear-gradient(180deg, #002e59 0%, #0756a1 100%);
  background-color: var(--text-color);
  height: 50%;
  font-family: "Montserrat", sans-serif;
  display: flex;
  padding: 10dvh 0;
  align-items: center;
  font-size: clamp(2.4rem, 1.9602rem + 1.6999vw, 4rem);
  font-style: normal;
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
