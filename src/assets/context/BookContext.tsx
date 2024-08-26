import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Book } from "../interfaces/Book";

interface BookContextType {
  books: Book[];
  addBook: (book: Omit<Book, "id">) => void;
  removeBook: (id: number) => void;
  nextId: number;
  getBooksFromAuthor: (authorId: string) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  const [nextId, setNextId] = useState<number>(books.length + 1);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book: Omit<Book, "id">) => {
    setBooks((prevBooks) => {
      const newBook = { id: nextId, ...book };
      setNextId((prevId) => prevId + 1);
      return [...prevBooks, newBook];
    });
  };

  const getBooksFromAuthor = (authorId: string): Book[] => {
    const filteredBooks = books.filter((book) => book.idAuthor === authorId);
    return filteredBooks;
  };

  const removeBook = (id: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, removeBook, nextId, getBooksFromAuthor }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};
