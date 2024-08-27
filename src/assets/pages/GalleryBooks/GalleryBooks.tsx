import { useState } from "react";
import * as C from "./GalleryBooks.styled";
import Card from "../../components/Card/Card";
import { TableIcon, CardStackIcon } from "@radix-ui/react-icons";
import CastleImg from "../../images/Castle image.png";
import ButtonLoadingMore from "../../components/Buttons/ButtonRemove";
import Modal from "../../components/Modal/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@radix-ui/themes";
import { useBooks } from "../../context/BookContext"; // Importa o hook do contexto
import { IFormInput } from "../../interfaces/IFormInput";
import { Book } from "../../interfaces/Book";
import ModalBook from "../../components/ModalBook/ModalBook";
import ButtonStarted from "../../components/Buttons/ButtonStarted";

const GalleryBooks = () => {
  const [cardVisual, setCardVisual] = useState(true);
  const [key, setKey] = useState(0);
  const styles = { width: "2rem", height: "2rem", cursor: "pointer" };
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const { books, addBook } = useBooks();
  const [bookActive, setBookActive] = useState<Book>();
  const [openModalBook, setOpenModalBook] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addBook(data);
    setOpenModal(false);
    reset();
  };

  const handleSetActiveBook = (book: Book) => {
    setBookActive(book);
    setOpenModalBook(true);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleTypeVisual = () => {
    setCardVisual(!cardVisual);
    setKey((prevKey) => prevKey + 1); // Atualiza a chave para forçar re-renderização
  };

  if (books.length === 0) {
    return (
      <C.Container id="books">
        <C.CastleImg
          src={CastleImg}
          alt="Imagem castelo animado"
          // id="icon"
          // className="hidden"
        />
        <C.Title
          style={{
            fontSize: "2rem",
            textAlign: "center",
            padding: "0.5rem 1rem ",
          }}
        >
          Ainda não temos Livros cadastrados{" "}
        </C.Title>
        <Modal
          onClose={handleModal}
          onOpen={openModal}
          title="Cadastrar Livros"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            Nome do Livro
            <TextField.Root {...register("title", { required: true })} />
            Id do Autor
            <TextField.Root
              radius="large"
              {...register("idAuthor", { required: true })}
            />
            Número de páginas
            <TextField.Root
              radius="large"
              type="number"
              {...register("pages")}
            />
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

        <ButtonLoadingMore img={false} onClick={handleModal}>
          Cadastrar Livros
        </ButtonLoadingMore>
      </C.Container>
    );
  }

  return (
    <C.Container>
      <C.CastleImg
        src={CastleImg}
        alt="Imagem castelo animado"
        // id="icon"
        // className="hidden"
      />
      {bookActive && (
        <ModalBook
          book={bookActive}
          onOpen={openModalBook}
          onClose={() => setOpenModalBook(false)}
        />
      )}

      <Modal onClose={handleModal} onOpen={openModal} title="Cadastrar Livros">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          Nome do Livro
          <TextField.Root {...register("title", { required: true })} />
          Id do Autor
          <TextField.Root
            radius="large"
            {...register("idAuthor", { required: true })}
          />
          Número de páginas
          <TextField.Root radius="large" type="number" {...register("pages")} />
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

      <C.Title>
        Todos os Livros
        {cardVisual ? (
          <TableIcon style={styles} onClick={handleTypeVisual} />
        ) : (
          <CardStackIcon style={styles} onClick={handleTypeVisual} />
        )}
      </C.Title>
      {cardVisual ? (
        <C.GalleryCards key={key}>
          {books.map((book, index) => (
            <Card
              onClickCard={() => handleSetActiveBook(book)}
              key={book.id}
              author={book.idAuthor}
              title={book.title}
              pages={book.pages}
              delay={index * 0.2}
            />
          ))}
        </C.GalleryCards>
      ) : (
        <C.ResponsiveTable>
          <li className="table-header">
            <div className="col col-1">Título</div>
            <div className="col col-2">Id do Autor</div>
            <div className="col col-3">Páginas</div>
          </li>
          {books.map((book) => (
            <li
              className="table-row"
              key={book.id}
              onClick={() => handleSetActiveBook(book)}
            >
              <div className="col col-1 " data-label="Título">
                {book.title}
              </div>
              <div className="col col-2" data-label="Autor">
                {book.idAuthor}
              </div>
              <div className="col col-3" data-label="Páginas">
                {book.pages}
              </div>
            </li>
          ))}
        </C.ResponsiveTable>
      )}
      <C.DivButtons>
        <ButtonStarted onClick={handleModal}>Cadastrar livros</ButtonStarted>
      </C.DivButtons>
    </C.Container>
  );
};

export default GalleryBooks;
