import * as C from "./Card.styled";
import BookImg from "../../images/Books.png";

interface CardProps {
  author: string;
  title: string;
  pages?: number;
  delay?: number;
}

const Card = ({ author, title, pages, delay }: CardProps) => {
  return (
    <C.CardAnimation style={{ animationDelay: `${delay}s` }}>
      <C.CardContainer>
        <img src={BookImg} alt="Book img" />
        <C.Line />
        <C.Content>
          <C.Title>{title}</C.Title>
          <C.Author>{author}</C.Author>
          {pages && <C.Pages> {pages} Páginas</C.Pages>}
        </C.Content>
      </C.CardContainer>
    </C.CardAnimation>
  );
};

export default Card;
