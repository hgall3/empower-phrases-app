import { useState } from "react";
import "./AddPhraseForm.scss";
import Modal from "../warningModal/ModalFillQuote";
import newbutton from "../../assets/iconadd.svg"


function AddPhraseForm({ onAdd }) {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) {
            setShowModal(true);
            return;
        }
        onAdd({ id: Date.now(), text: text.trim(), author: author.trim() || "Anonymous" });
        setText("");
        setAuthor("");
    };

    return (
        <>
            <form className="add-phrase-form" onSubmit={handleSubmit}>
                <label htmlFor="phrase-input">Your phrase:</label>
            <textarea
            id="phrase-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your pharse..."
            rows={3}
            />

            <label htmlFor="author-input">Author (optional): </label>
            <input 
            id="author-input"
            type="text"
            value={author}
            onChange={(e) => setAuthor (e.target.value)}
            placeholder="Author (optional)" 
            />

            <button className="buttoncard" type="submit"><img src={newbutton} alt="" /></button> 
        </form>
            
            {showModal && (
                <Modal
                    message="Please fill out the phrase before adding."
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}

export default AddPhraseForm;
