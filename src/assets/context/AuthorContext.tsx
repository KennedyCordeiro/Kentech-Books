import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Author } from "../interfaces/Author";

interface AuthorContextType {
  authors: Author[];
  addAuthor: (author: Omit<Author, "id">) => void;
  removeAuthor: (id: string) => void;
}

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Carregar autores do localStorage no início
  const [authors, setAuthors] = useState<Author[]>(() => {
    const storedAuthors = localStorage.getItem("authors");
    return storedAuthors ? JSON.parse(storedAuthors) : [];
  });

  // Atualizar localStorage sempre que a lista de autores mudar
  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  const addAuthor = (author: Omit<Author, "id">) => {
    const newAuthor: Author = {
      id: (authors.length + 1).toString(),
      ...author,
    }; // Garantindo que newAuthor é do tipo Author
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]); // prevAuthors é do tipo Author[]
  };

  const removeAuthor = (id: string) => {
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
