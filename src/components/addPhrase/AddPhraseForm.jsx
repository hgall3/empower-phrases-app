import { useState } from "react";
import "./AddPhraseForm.scss"
import newbutton from "../../assets/iconadd.svg"
import AddImageToCard from "../addImageToQuote/AddImageToCard";


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
           {/* Estoy agregando input para imagen 1 línea */} 
            <AddImageToCard imageUrl={image} setImageUrl={setImage} />

            <button className="buttoncard" type="submit">
                <img src={newbutton} alt="Add button" /></button> 
        </form>
        );
    
};

export default AddPhraseForm;

