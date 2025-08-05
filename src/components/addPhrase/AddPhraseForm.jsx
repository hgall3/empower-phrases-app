import { useState } from "react";
import "./AddPhraseForm.scss"


function AddPhraseForm({onAdd}) {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return alert("Phrase cannot be empty");
            onAdd({ id: Date.now(), text: text.trim(), author: author.trim() || "Anonymous" });
            setText("");
            setAuthor("");
    };

    return (
        <form className="add-phrase-form" onSubmit={handleSubmit}>
            <h2>Inspiration Quotes</h2>

            <label htmlFor="phrase-input">Your phrase:</label>
            <textarea
            id="phrase-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your pharse..."
            rows={3}
            required
            />

            <label htmlFor="author-input">Author (opcional): </label>
            <input 
            id="author-input"
            type="text"
            value={author}
            onChange={(e) => setAuthor (e.target.value)}
            placeholder="Author (opcional)" 
            />

            <button type="submit">Add Phrase</button> 
        </form>
    );

}

export default AddPhraseForm;

