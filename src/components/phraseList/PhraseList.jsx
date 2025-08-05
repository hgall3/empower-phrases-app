import { useState } from "react";
import "../phraseList/PhraseList.scss";
import DeletePhrase from "../deletePhrase/DeletePhrase.jsx";
import EditPhrase from "../editPhrase/EditPhrase.jsx";
import editIcon from "../../assets/edit.svg";

function PhraseList({ phrases, onDeletePhrase, onEditPhrase }) {
  const [editingId, setEditingId] = useState(null);

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleSave = (updatedPhrase) => {
    onEditPhrase(updatedPhrase);
    setEditingId(null);
  };

  return (
    <div className="phrase-list">
      {phrases.length === 0 ? (
        <p className="empty-message">No phrases yet!</p>
      ) : (
        phrases.map((phrase) => (
          <div key={phrase.id} className="phrase-card">
            {editingId === phrase.id ? (
              <EditPhrase
                phrase={phrase}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <>
                <p className="phrase-text">"{phrase.text}"</p>
                <p className="phrase-author">— {phrase.author || "Anonymous"}</p>
                <div className="actions">

                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(phrase.id)}
                    aria-label="Edit phrase">
                    <img src={editIcon} alt="Editar" />
                  </button>
                  
                  <DeletePhrase id={phrase.id} onDelete={onDeletePhrase} />
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default PhraseList;