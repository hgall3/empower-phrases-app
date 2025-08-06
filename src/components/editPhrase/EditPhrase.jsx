import { useState } from "react";
import "./EditPhrase.scss";
import AddImageToCard from "../addImageToQuote/AddImageToCard";

function EditPhrase({ phrase, onSave, onCancel }) {
  const [text, setText] = useState(phrase.text);
  const [author, setAuthor] = useState(phrase.author);
  const [imageUrl, setImageUrl] = useState(phrase.image || "");
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
      image: imageUrl.trim() || "",

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

        <AddImageToCard imageUrl={imageUrl} setImageUrl={setImageUrl} />

        <div className="buttons">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </>
  );
}

export default EditPhrase;