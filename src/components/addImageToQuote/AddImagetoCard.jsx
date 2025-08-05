import { useState } from "react";
import "./AddImageToCard.scss";


function AddImageToCard({ phrase, onSaveImage }) {
  const [showInput, setShowInput] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleSave = () => {
    if (!imageUrl.trim()) return;
    onSaveImage({ ...phrase, image: imageUrl.trim() });
    setImageUrl("");
    setShowInput(false);
  };

  return (
    <div className="image-url-row">
      {!showInput ? (
        <button onClick={() => setShowInput(true)} className="add-image-btn">
          Add image
        </button>
      ) : (
        <>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Add an image to your Quote from an URL (optional)"
            className="image-input"
          />
          <button onClick={handleSave} className="save-image-btn">
            Save image
          </button>
        </>
      )}
    </div>
  );
}

export default AddImageToCard;
