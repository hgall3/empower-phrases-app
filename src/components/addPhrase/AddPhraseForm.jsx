import { useState } from "react";
import "./AddPhraseForm.scss";
import newbutton from "../../assets/iconadd.svg";
import ModalFillQuote from "../warningModal/ModalFillQuote"; // modal de tu amiga
import WarningModal from "../warningModal/WarningModal"; // tu modal

function AddPhraseForm({ onAdd }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setShowErrorModal(true); // mostrar modal de error
      return;
    }

    onAdd({
      id: Date.now(),
      text: text.trim(),
      author: author.trim() || "Anonymous",
      image: image.trim(),
    });

    // Reset campos
    setText("");
    setAuthor("");
    setImage("");

    // Mostrar modal de éxito
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 2000);
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
          placeholder="Add an image to your Quote from a URL (optional)"
        />

        <button className="buttoncard" type="submit">
          <img src={newbutton} alt="Add button" />
        </button>
      </form>

      {/* Modal de error */}
      {showErrorModal && (
        <ModalFillQuote
          message="Please fill out the quote before adding."
          onClose={() => setShowErrorModal(false)}
        />
      )}

      {/* Modal de éxito */}
      {showSuccessModal && (
        <WarningModal onClose={() => setShowSuccessModal(false)} />
      )}
    </>
  );
}

export default AddPhraseForm;
