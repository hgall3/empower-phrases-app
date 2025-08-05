import { useState } from "react";
import "./AddPhraseForm.scss"
import newbutton from "../../assets/iconadd.svg"


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
            
            <label htmlFor="phrase-input">Your phrase:</label>
            <textarea
            id="phrase-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your pharse..."
            rows={3}
            required
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
    );

}

export default AddPhraseForm;

