import * as C from "./Card.styled";
import BookImg from "../../images/Books.png";
import { TrashIcon } from "@radix-ui/react-icons";
interface CardProps {
  author: string;
  title: string;
  pages?: number;
  delay?: number;
  remove?: () => void;
  onClickCard: () => void;
}

const Card = ({
  author,
  title,
  pages,
  delay,
  remove,
  onClickCard,
}: CardProps) => {
  return (
    <C.CardAnimation
      style={{ animationDelay: `${delay}s` }}
      onClick={onClickCard}
    >
      <C.CardContainer>
        <img src={BookImg} alt="Book img" />
        <TrashIcon className="trash" onClick={remove} />
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
