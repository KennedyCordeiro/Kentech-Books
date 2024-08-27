import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Book } from "../interfaces/Book";
import { useAuthors } from "./AuthorContext";

interface BookContextType {
  books: Book[];
  addBook: (book: Omit<Book, "id">) => void;
  removeBook: (id: number) => void;
  nextId: number;
  getBooksFromAuthor: (authorId: string) => Book[];
  error: string;
  resetError: () => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState("");
  const [books, setBooks] = useState<Book[]>(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  const resetError = () => setError("");
  const { authors } = useAuthors(); // Acessa os autores do contexto de autores
  const [nextId, setNextId] = useState<number>(books.length + 1);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book: Omit<Book, "id">) => {
    setError("");
    const authorExists = authors.some((author) => author.id === book.idAuthor);

    if (!authorExists) {
      console.error("O autor fornecido não existe.");
      // Só temos um erro possível então não é necessário uma complexidade maior no tratamento de erros
      setError("Id do autor incorreto ou não encontrado");
      return;
    }

    setBooks((prevBooks) => {
      const newBook = { id: nextId, ...book };
      setNextId((prevId) => prevId + 1);
      return [...prevBooks, newBook];
    });
  };

  const getBooksFromAuthor = (authorId: string): Book[] => {
    return books.filter((book) => book.idAuthor === authorId);
  };

  const removeBook = (id: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        removeBook,
        nextId,
        getBooksFromAuthor,
        error,
        resetError,
      }}
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
