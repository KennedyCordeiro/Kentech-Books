// BookContext.tsx

import React, { createContext, useState, ReactNode, useContext } from "react";

// Define o tipo para o contexto
interface Book {
  id: number;
  title: string;
  author: string;
  pages?: number;
}

interface BookContextType {
  books: Book[];
  addBook: (book: Omit<Book, "id">) => void;
  removeBook: (id: number) => void;
  nextId: number; // Adiciona o contador de IDs
}

// Inicializa o contexto com valores padrão
const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [nextId, setNextId] = useState<number>(books.length + 1); // Inicializa o próximo ID

  const addBook = (book: Omit<Book, "id">) => {
    setBooks((prevBooks) => {
      const newBook = { id: nextId, ...book };
      setNextId((prevId) => prevId + 1); // Incrementa o próximo ID
      return [...prevBooks, newBook];
    });
  };

  const removeBook = (id: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, nextId }}>
      {children}
    </BookContext.Provider>
  );
};

// Hook para usar o contexto
export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};
