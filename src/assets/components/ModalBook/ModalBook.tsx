import styled, { keyframes } from "styled-components";
// import { useState, useEffect } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Book } from "../../interfaces/Book";

const ModalAnimation = keyframes`
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
    animation: ${ModalAnimation} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

const Content = styled.div`
  animation: ${slideInEllipticTop} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation-delay: 0.2s;
  width: 40vw;
  min-height: 30vh;
  background: var(--primary-color);
  padding: 1em 1.5rem;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1em;
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

const Title = styled.div`
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 0;
  color: var(--text-color);
  font-family: Montserrat, sans-serif;
  font-size: clamp(2.4rem, 1.4857rem + 1.4286vw, 3.2rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Line = styled.div`
  height: 2px;
  width: 70%;
  background-color: #c4c4c4;
  margin-bottom: 1rem;
`;

const InfoBooks = styled.div`
  color: var(--text-color);
  font-family: Poppins;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;

  .idAuthor {
    font-weight: 400;
    font-size: 1rem;
  }
`;

interface ModalBookProps {
  onOpen: Boolean;
  book: Book;
  onClose: () => void;
}

const ModalBook = ({ book, onOpen = false, onClose }: ModalBookProps) => {
  //   const { getBooksFromAuthor } = useBooks();
  //   const [booksFromAuthor, setBooksFromAuthor] = useState<any[]>([]);

  //   useEffect(() => {
  //     if (book && book.idAuthor) {
  //       const books = getBooksFromAuthor(book.idAuthor); // Garante que sempre seja um array
  //       if (Array.isArray(books) && books.length > 0) {
  //         setBooksFromAuthor(books);
  //       }
  //     }
  //   }, [book, getBooksFromAuthor]);

  return (
    <ModalDiv className={onOpen ? "active" : ""}>
      <Content>
        <Cross1Icon className="close" onClick={onClose} />
        <Title>{book.title}</Title>
        <Line />
        <InfoBooks>
          Numero de páginas {book.pages}
          <div className="idAuthor">Id do autor: {book.idAuthor}</div>
        </InfoBooks>

        {/* {booksFromAuthor.length > 0 && (
          <>
            <h3>Outros livros do mesmo autor:</h3>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {booksFromAuthor.map((otherBook) => (
                <CardBook key={otherBook.id}>{otherBook.title}</CardBook>
              ))}
            </div>
          </>
        )} */}
      </Content>
    </ModalDiv>
  );
};

export default ModalBook;
