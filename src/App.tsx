import "./App.css";
import ObserverComponent from "./assets/components/ObserverComponent/ObserverComponent";
import GalleryBooks from "./assets/pages/GalleryBooks/GalleryBooks";
import { Theme } from "@radix-ui/themes";
import Home from "./assets/pages/Home/Home";

function App() {
  return (
    <Theme>
      <ObserverComponent />
      <Home />
      <GalleryBooks />
    </Theme>
  );
}

export default App;
