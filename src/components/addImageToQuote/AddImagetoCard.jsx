import "./AddImageToCard.scss";

function AddImageToCard({ imageUrl, setImageUrl, showLabel = true }) {
  return (
    <div className="image-url-row">
      {showLabel && (
        <label htmlFor="image-input">Add an image:</label>
      )}
      <input
        id="image-input"
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Add an image to your quote from an URL (optional)"
        className="image-input"
      />
    </div>
  );
}

export default AddImageToCard;
