import { useState } from "react";
import "./AddPhraseForm.scss";
import newbutton from "../../assets/iconadd.svg";
import Modal from "../warningModal/ModalFillQuote";

function AddPhraseForm({ onAdd }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(""); // Agregado por Erika para imagen
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setShowModal(true);
      return;
    }

    onAdd({
      id: Date.now(),
      text: text.trim(),
      author: author.trim() || "Anonymous",
      image: image.trim(), // para agregar al form la imagen
    });

    setText("");
    setAuthor("");
    setImage("");
  };

  return (
    <>
      <form className="add-phrase-form" onSubmit={handleSubmit}>
        <label htmlFor="phrase-input">Your phrase:</label>
        <textarea
          id="phrase-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your phrase..."
          rows={3}
        />

        <label htmlFor="author-input">Author (optional):</label>
        <input
          id="author-input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author (optional)"
        />

        <label htmlFor="image-input">Image URL (optional):</label>
        <input
          id="image-input"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Add an image to your Quote from a URL (optional):"
        />

        <button className="buttoncard" type="submit">
          <img src={newbutton} alt="Add button" />
        </button>
      </form>

      {showModal && (
        <Modal
          message="Please fill out the quote before adding."
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default AddPhraseForm;