import "./App.css";
import "@radix-ui/themes/styles.css";
import ObserverComponent from "./assets/components/ObserverComponent/ObserverComponent";
import GalleryBooks from "./assets/pages/GalleryBooks/GalleryBooks";
import { Theme } from "@radix-ui/themes";
import Home from "./assets/pages/Home/Home";
import { BookProvider } from "./assets/context/BookContext";
import GalleryAuthors from "./assets/pages/GalleryAuthors/GalleryAuthors";
import { AuthorProvider } from "./assets/context/AuthorContext";
function App() {
  return (
    <Theme>
      <AuthorProvider>
        <BookProvider>
          <ObserverComponent />
          <Home />
          <GalleryBooks />
          <GalleryAuthors />
        </BookProvider>
      </AuthorProvider>
    </Theme>
  );
}

export default App;
