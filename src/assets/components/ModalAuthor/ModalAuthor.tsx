import styled, { keyframes } from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";
import ModalImg from "../../images/ModalBook.png";
import ButtonRemove from "../Buttons/ButtonRemove";
import { useState } from "react";
import { Author } from "../../interfaces/Author";
import { useAuthors } from "../../context/AuthorContext";

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

const slideInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
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
  animation: ${slideInCenter} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.2s;
  width: 40vw;
  min-height: 30vh;
  background: var(--primary-color);
  padding: 1em 1.5rem;
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  flex-direction: column;
  overflow: hidden;

  @media (width <= 1024px) {
    width: 80vw;
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

  .imgBooks {
    position: absolute;
    width: 30%;
    bottom: -50px;
    right: -60px;

    @media (width <= 1024px) {
      bottom: -30px;
      right: -40px;
    }
  }

  .trash {
    width: 2em;
    height: 2em;
  }
`;

const Title = styled.div`
  padding: 1.5rem 0.5rem 0 0.5rem;
  margin: 0.5rem 0;
  color: var(--text-color);
  font-family: Montserrat, sans-serif;
  font-size: clamp(2rem, 1.3143rem + 1.0714vw, 2.6rem);
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

  .trash {
    position: absolute;
  }
`;

interface ModalAuthorProps {
  onOpen: Boolean;
  author: Author;
  onClose: () => void;
}

const ModalAuthor = ({ author, onOpen = false, onClose }: ModalAuthorProps) => {
  const { removeAuthor } = useAuthors();
  const [onExclude, setOnExclude] = useState(false);

  const handleRemoveBook = () => {
    removeAuthor(author.id);
    setOnExclude(false);
    onClose();
  };

  return (
    <ModalDiv className={onOpen ? "active" : ""}>
      <Content>
        <img src={ModalImg} alt="Imagem de livros" className="imgBooks" />
        <Cross1Icon
          className="close"
          onClick={() => {
            onClose();
            setOnExclude(false);
          }}
        />
        {!onExclude ? (
          <>
            <Title>{author.name}</Title>
            <Line />
            <InfoBooks>
              Id do author {author.id}
              <div className="idAuthor">Email: {author.email}</div>
            </InfoBooks>
            <div style={{ margin: "1rem 0" }}>
              <ButtonRemove img onClick={() => setOnExclude(true)}>
                Remover autor
              </ButtonRemove>
            </div>
          </>
        ) : (
          <>
            <Title style={{ fontSize: "2rem" }}>
              Tem certeza que deseja excluir o autor {author.name}?
            </Title>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.4rem" }}>
              <ButtonRemove img={false} action={handleRemoveBook}>
                Sim
              </ButtonRemove>
              <ButtonRemove
                img={false}
                style={{ background: "var(--text-color)" }}
                action={() => setOnExclude(false)}
              >
                Não
              </ButtonRemove>
            </div>
          </>
        )}
      </Content>
    </ModalDiv>
  );
};

export default ModalAuthor;
