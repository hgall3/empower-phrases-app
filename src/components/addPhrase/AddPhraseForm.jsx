import { useState } from "react";
import "./AddPhraseForm.scss";
import Modal from "../warningModal/ModalFillQuote";

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
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your phrase..."
                    rows={3}
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author (optional)"
                />
                <button type="submit">Add Phrase</button>
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
