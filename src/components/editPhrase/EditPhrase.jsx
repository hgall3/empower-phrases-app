import { useState } from "react";
import "./EditPhrase.scss";
import AddImageCard from "../addImageToQuote/AddImageCard";
import Modal from "../warningModal/ModalFillQuote";

function EditPhrase({ phrase, onSave }) {
  const [text, setText] = useState(phrase.text);
  const [author, setAuthor] = useState(phrase.author);
  const [image, setImage] = useState(phrase.image || "");
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    if (text.trim() === "") {
      setShowModal(true);
      return;
    }

    onSave({
      ...phrase,
      text: text.trim(),
      author: author.trim() || "Anonymous",
      image: image.trim() || "",

    });
  };

  return (
    <>
      <div className="edit-form">
        <input
          type="text"
          placeholder="Write your quote here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <input
          type="text"
          placeholder="Author goes here..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <AddImageCard imageUrl={image} setImageUrl={setImage} showLabel={false} />


        <div className="buttons">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>

        {showModal && (
        <Modal
          message="Please fill out the quote before saving."
          onClose={() => setShowModal(false)}
        />
      )}
      
    </>
  );
}

export default EditPhrase;