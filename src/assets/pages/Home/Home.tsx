import * as C from "./Home.styled";
import ButtonStarted from "../../components/Buttons/ButtonStarted";
import Books from "../../images/Books.png";
import CloudImg from "../../images/nuvens.png";

const Home = () => {
  return (
    <C.Container>
      <C.CloudImg src={CloudImg} className="hidden" id="cloudLeft" />
      <C.CloudImgRight src={CloudImg} className="hidden" id="cloudRight" />
      <C.Content>
        <p>Olá</p>
        Bem vindo a Kentech Books
        <a href="#authors">
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
