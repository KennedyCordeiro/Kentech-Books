import { createContext, useContext, useState, ReactNode } from "react";
import { Author } from "../interfaces/Author";

interface AuthorContextProps {
  authors: Author[];
  addAuthor: (author: Author) => void;
  removeAuthor: (id: number) => void;
}

const AuthorContext = createContext<AuthorContextProps | undefined>(undefined);

export const useAuthors = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthors must be used within an AuthorProvider");
  }
  return context;
};

export const AuthorProvider = ({ children }: { children: ReactNode }) => {
  const [authors, setAuthors] = useState<Author[]>(() => {
    const storedAuthors = localStorage.getItem("authors");
    return storedAuthors ? JSON.parse(storedAuthors) : [];
  });

  const addAuthor = (author: Author) => {
    const newAuthors = [...authors, author];
    setAuthors(newAuthors);
    localStorage.setItem("authors", JSON.stringify(newAuthors));
  };

  const removeAuthor = (id: number) => {
    const filteredAuthors = authors.filter((author) => author.id !== id);
    setAuthors(filteredAuthors);
    localStorage.setItem("authors", JSON.stringify(filteredAuthors));
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor, removeAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};
