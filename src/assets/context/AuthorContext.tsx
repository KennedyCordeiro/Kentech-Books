import React, { createContext, useState, useContext, ReactNode } from "react";
import { Author } from "../interfaces/Author";

interface AuthorContextType {
  authors: Author[];
  addAuthor: (author: Omit<Author, "id">) => void;
  removeAuthor: (id: number) => void;
}

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authors, setAuthors] = useState<Author[]>([]);

  const addAuthor = (author: Omit<Author, "id">) => {
    const newAuthor = { id: authors.length + 1, ...author };
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  const removeAuthor = (id: number) => {
    setAuthors((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== id)
    );
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor, removeAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthors = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthors must be used within an AuthorProvider");
  }
  return context;
};
