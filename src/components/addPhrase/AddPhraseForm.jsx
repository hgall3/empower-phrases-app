import { useState } from "react";
import "./AddPhraseForm.scss"
import newbutton from "../../assets/icon-newQuote.svg"


function AddPhraseForm({onAdd}) {
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState(""); //Agregado por Erika para imagen 


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return alert("Phrase cannot be empty");

        onAdd({ 
            id: Date.now(),
            text: text.trim(),
            author: author.trim() || "Anonymous",
            image: image.trim(), //para agregar al form la imagen
         }); 
         
            setText("");
            setAuthor("");
            setImage("");
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
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author (opcional)" 
            />
           {/* Estoy agregando input para imagen 8 líneas */} 
            <label htmlFor="image-input">
                
            </label>
            <input
                id="image-input"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Add an image to your Quote from an URL (optional):"
                />


            <button className="buttoncard" type="submit">
                <img src={newbutton} alt="Add button" /></button> 
        </form>
        );
    
};

export default AddPhraseForm;

