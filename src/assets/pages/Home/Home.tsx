import * as C from "./Home.styled";
import ButtonStarted from "../../components/Buttons/ButtonStarted";
import Books from "../../images/Books.png";

const Home = () => {
  return (
    <C.Container id="home">
      <C.Content className="hidden">
        <p>Olá</p>
        Bem vindo a Kentech Books
        <a href="#books">
          <ButtonStarted style={{ marginTop: "1.5rem" }}>
            Vamos Começar
          </ButtonStarted>{" "}
        </a>
        <C.BooksImg
          className="hidden"
          src={Books}
          alt="Livros"
          style={{ animationDelay: ".3s" }}
        />
      </C.Content>
    </C.Container>
  );
};

export default Home;
