import "./AddImageToCard.scss";

function AddImageToCard({ imageUrl, setImageUrl }) {
  return (
    <div className="image-url-row">
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Add an image to your Quote from an URL (optional)"
        className="image-input"
      />
    </div>
  );
}

export default AddImageToCard;
