import React, { useState } from "react";
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

  const handleTypeVisual = () => {
    setCardVisual(!cardVisual);
  };

  return (
    <C.Container>
      <C.Title>
        Todos os Livros
        {cardVisual ? (
          <TableIcon
            style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
            onClick={handleTypeVisual}
          />
        ) : (
          <CardStackIcon
            style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
            onClick={handleTypeVisual}
          />
        )}
      </C.Title>
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
