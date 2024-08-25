import { useState } from "react";
import * as C from "./GalleryBooks.styled";
import { Books } from "./Books";
import Card from "../../components/Card/Card";
import { TableIcon } from "@radix-ui/react-icons";
import { CardStackIcon } from "@radix-ui/react-icons";

interface BookProps {
  author: string;
  title: string;
  pages: number;
}

const GalleryBooks = () => {
  const [cardVisual, setCardVisual] = useState(false);
  const styles = { width: "2rem", height: "2rem", cursor: "pointer" };
  const handleTypeVisual = () => {
    setCardVisual(!cardVisual);
  };

  return (
    <C.Container>
      <C.Title>
        Todos os Livros
        {cardVisual ? (
          <TableIcon style={styles} onClick={handleTypeVisual} />
        ) : (
          <CardStackIcon style={styles} onClick={handleTypeVisual} />
        )}
      </C.Title>

      <C.ResponsiveTable>
        <li className="table-header">
          <div className="col col-1">Título</div>
          <div className="col col-2">Autor</div>
          <div className="col col-3">Páginas</div>
        </li>

        {Books.map((book, index) => (
          <li className="table-row" key={index}>
            <div className="col col-1" data-label="Título">
              {book.title}
            </div>
            <div className="col col-2" data-label="Autor">
              {book.author}
            </div>
            <div className="col col-3" data-label="Páginas">
              {book.pages}
            </div>
          </li>
        ))}
      </C.ResponsiveTable>

      <C.GalleryCards>
        {Books.map((book: BookProps, index) => (
          <Card
            key={index}
            author={book.author}
            title={book.title}
            pages={book.pages}
          />
        ))}
      </C.GalleryCards>
    </C.Container>
  );
};

export default GalleryBooks;
