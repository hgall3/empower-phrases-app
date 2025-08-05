import { useState } from "react";
import "./AddImageQuote.scss";

function AddImageQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cards, setCards] = useState([]);

  const handleSave = (e) => {
    e.preventDefault();

    if (!quote.trim()) {
      return alert("Quote is required.");
    }

    const newCard = {
      id: Date.now(),
      quote: quote.trim(),
      author: author.trim() || "Anonymous",
      image: imageUrl.trim(),
      isEditing: false,
    };

    setCards((prev) => [...prev, newCard]);

    setQuote("");
    setAuthor("");
    setImageUrl("");
  };

  const handleDelete = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleEditToggle = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: !card.isEditing } : card
      )
    );
  };

  const handleEditSave = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isEditing: false } : card
      )
    );
  };

  const handleChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [field]: value } : card
      )
    );
  };

  return (
    <>
      <form className="image-form">
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write your quote here..."
          className="quote-input"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author's name..."
          className="author-input"
        />
        <div className="image-url-row">
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Paste image URL here..."
            className="image-input"
          />
        </div>

        <div className="icons-container">
          <img
            src="/src/assets/save.svg"
            alt="save"
            title="Save"
            onClick={handleSave}
          />
        </div>
      </form>

      {/* Renderizar las tarjetas */}
      {cards.map((card) => (
        <div className="image-form" key={card.id}>
          {card.isEditing ? (
            <>
              <input
                type="text"
                value={card.quote}
                onChange={(e) => handleChange(card.id, "quote", e.target.value)}
              />
              <input
                type="text"
                value={card.author}
                onChange={(e) =>
                  handleChange(card.id, "author", e.target.value)
                }
              />
              <input
                type="text"
                value={card.image}
                onChange={(e) =>
                  handleChange(card.id, "image", e.target.value)
                }
              />
            </>
          ) : (
            <>
              <p className="quote-text">“{card.quote}”</p>
              <p className="author-text">– {card.author}</p>
              {card.image && (
                <img
                  src={card.image}
                  alt="quote"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              )}
            </>
          )}

          <div className="icons-container">
            {card.isEditing ? (
              <img
                src="/src/assets/save.svg"
                alt="save"
                title="Save edits"
                onClick={() => handleEditSave(card.id)}
              />
            ) : (
              <img
                src="/src/assets/edit.svg"
                alt="edit"
                title="Edit"
                onClick={() => handleEditToggle(card.id)}
              />
            )}
            <img
              src="/src/assets/trash2.svg"
              alt="delete"
              title="Delete"
              onClick={() => handleDelete(card.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default AddImageQuote;
