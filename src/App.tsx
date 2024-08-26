import "./App.css";
import "@radix-ui/themes/styles.css";
import ObserverComponent from "./assets/components/ObserverComponent/ObserverComponent";
import GalleryBooks from "./assets/pages/GalleryBooks/GalleryBooks";
import { Theme } from "@radix-ui/themes";
import Home from "./assets/pages/Home/Home";
import { BookProvider } from "./assets/context/BookContext";
function App() {
  return (
    <Theme>
      <BookProvider>
        <ObserverComponent />
        <Home />
        <GalleryBooks />
      </BookProvider>
    </Theme>
  );
}

export default App;
