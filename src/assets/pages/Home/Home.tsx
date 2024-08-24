import * as C from "./Home.styled";
import Radius from "../../images/Radius.svg";
import Castle from "../../images/CastleImg.png";
import ButtonStarted from "../../components/Buttons/ButtonStarted";

const Home = () => {
  return (
    <C.Container>
      <C.Radius src={Radius} alt="Imagem de detalhe" />
      <C.CastleImg src={Castle} alt="Castelo animado" className="hidden" />
      <C.Content>
        <p>Olá</p>
        Bem vindo a Kentech Books
        <ButtonStarted style={{ marginTop: "1.5rem" }}>
          Vamos Começar
        </ButtonStarted>{" "}
      </C.Content>
    </C.Container>
  );
};

export default Home;
