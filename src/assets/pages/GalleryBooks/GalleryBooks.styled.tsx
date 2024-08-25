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

export const ResponsiveTable = styled.ul`
  width: 85%;
  margin: 0;
  padding: 0;

  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .table-header {
    background-color: var(--secondary-color);
    font-size: 14px;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }

  @media (width <= 1024px) {
    .table-header {
      width: 100%;
      display: flex;
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;
