import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 50dvh;
  background-color: var(--primary-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2rem 0;
  line-height: normal;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const GalleryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  align-items: baseline;
  width: 85%;
  height: auto;
  row-gap: 2rem;
  column-gap: 2rem;
`;
