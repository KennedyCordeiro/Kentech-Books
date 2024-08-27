import { useState } from "react";
import * as C from "./GalleryAuthors.styled";
import { TableIcon, CardStackIcon } from "@radix-ui/react-icons";
import ButtonLoadingMore from "../../components/Buttons/ButtonRemove";
import Modal from "../../components/Modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@radix-ui/themes";
import { useAuthors } from "../../context/AuthorContext"; // Hook para o contexto dos autores
import { Author } from "../../interfaces/Author";
import ModalAuthor from "../../components/ModalAuthor/ModalAuthor";
import ButtonStarted from "../../components/Buttons/ButtonStarted";

const GalleryAuthors = () => {
  const [cardVisual, setCardVisual] = useState(true);
  const [key, setKey] = useState(0);
  const styles = { width: "2rem", height: "2rem", cursor: "pointer" };
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, reset } = useForm<Author>(); // Alterado para a interface Author
  const { authors, addAuthor } = useAuthors();
  const [authorActive, setAuthorActive] = useState<Author>();
  const [openModalAuthor, setOpenModalAuthor] = useState(false);

  const onSubmit: SubmitHandler<Author> = (data) => {
    addAuthor(data);
    handleModal();
    reset();
  };

  const handleSetActiveAuthor = (author: Author) => {
    setAuthorActive(author);
    setOpenModalAuthor(true);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleTypeVisual = () => {
    setCardVisual(!cardVisual);
    setKey((prevKey) => prevKey + 1); // Força re-renderização
  };

  if (authors.length === 0) {
    return (
      <C.Container id="authors">
        <C.Title
          style={{
            fontSize: "2rem",
            textAlign: "center",
            padding: "0.5rem 1rem ",
          }}
        >
          Ainda não temos Autores cadastrados
          <br /> Vamos mudar isso :)
        </C.Title>

        <Modal
          onClose={handleModal}
          onOpen={openModal}
          title="Cadastrar Autores"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            Nome do Autor
            <TextField.Root {...register("name", { required: true })} />
            Email do Autor
            <TextField.Root
              radius="large"
              type="email"
              {...register("email")}
            />
            id do Autor
            <TextField.Root radius="large" type="text" {...register("id")} />
            <Button
              type="submit"
              variant="solid"
              size={"2"}
              style={{ cursor: "pointer", width: "20%", margin: "1rem auto" }}
            >
              Cadastrar
            </Button>
          </form>
        </Modal>

        <ButtonLoadingMore
          img={false}
          onClick={handleModal}
          style={{ background: "var(--extra-color)" }}
        >
          Cadastrar autores
        </ButtonLoadingMore>
      </C.Container>
    );
  }

  return (
    <C.Container>
      {authorActive && (
        <ModalAuthor
          author={authorActive}
          onOpen={openModalAuthor}
          onClose={() => setOpenModalAuthor(false)}
        />
      )}

      <Modal onClose={handleModal} onOpen={openModal} title="Cadastrar Autores">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          Nome do Autor
          <TextField.Root {...register("name", { required: true })} />
          Email do Autor
          <TextField.Root radius="large" type="email" {...register("email")} />
          id do Autor
          <TextField.Root radius="large" type="text" {...register("id")} />
          <Button
            type="submit"
            variant="solid"
            size={"2"}
            style={{ cursor: "pointer", width: "40%", margin: "1rem auto" }}
          >
            Cadastrar
          </Button>
        </form>
      </Modal>

      <C.Title>Todos os Autores</C.Title>
      <C.ResponsiveTable>
        <li className="table-header">
          <div className="col col-1">Nome</div>
          <div className="col col-2">Email</div>
        </li>
        {authors.map((author) => (
          <li
            className="table-row"
            key={author.id}
            onClick={() => handleSetActiveAuthor(author)}
          >
            <div className="col col-1 " data-label="Nome">
              {author.name}
            </div>
            <div className="col col-2" data-label="Email">
              {author.email || "Não informado"}
            </div>
          </li>
        ))}
      </C.ResponsiveTable>

      <C.DivButtons>
        <ButtonStarted onClick={handleModal}>Cadastrar autores</ButtonStarted>
      </C.DivButtons>
    </C.Container>
  );
};

export default GalleryAuthors;
