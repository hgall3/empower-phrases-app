import { useState } from "react";
import "./AddPhraseForm.scss";

import AddImageToCard from "../addImageToQuote/AddImageToCard";
import newbutton from "../../assets/iconadd.svg";
import ModalFillQuote from "../warningModal/ModalFillQuote"; 
import WarningModal from "../warningModal/WarningModal"; 

function AddPhraseForm({ onAdd }) {
const [text, setText] = useState("");
const [author, setAuthor] = useState("");
const [image, setImage] = useState("");
const [showErrorModal, setShowErrorModal] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
    setShowErrorModal(true); 
    return;
    }

    onAdd({
    id: Date.now(),
    text: text.trim(),
    author: author.trim() || "Anonymous",
    image: image.trim(),
    });

    
    setText("");
    setAuthor("");
    setImage("");

    
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 2000);
};

return (
    <>
<form className="add-phrase-form" onSubmit={handleSubmit}>
    <label htmlFor="phrase-input">Your phrase:</label>
    <textarea id="phrase-input" value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Write your phrase..."
    rows={3}
    />

    <label htmlFor="author-input">Author:</label>
    <input
    id="author-input"
    type="text"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    placeholder="Author (optional)"
    />

        {/* Componente modular para imagen */}
        <AddImageToCard imageUrl={image} setImageUrl={setImage} />

        <button className="buttoncard" type="submit">
        <img src={newbutton} alt="Add button" />
        </button>
    </form>

    
    {showErrorModal && (
        <ModalFillQuote
        message="Please fill out the quote before adding."
        onClose={() => setShowErrorModal(false)}
        />
    )}

    
    {showSuccessModal && (
        <WarningModal onClose={() => setShowSuccessModal(false)} />
    )}
    </>
);
}

export default AddPhraseForm;
