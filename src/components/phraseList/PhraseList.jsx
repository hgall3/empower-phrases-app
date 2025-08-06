import { useState } from "react";
import "../phraseList/PhraseList.scss";
import EditPhrase from "../editPhrase/EditPhrase.jsx";
import editIcon from "../../assets/edit.svg";
import trashIcon from "../../assets/trash.svg";
import AddImageCard from "../addImageToQuote/AddImageCard.jsx";
import WarningDeleteModal from "../warningModal/WarningDeleteModal"; 

function PhraseList({ phrases, onDeletePhrase, onEditPhrase }) {
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      onDeletePhrase(selectedId);
    }
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div className="phrase-list">
      {phrases.length === 0 ? (
        <p className="empty-message">No phrases yet!</p>
      ) : (
        phrases.map((phrase) => (
          <div key={phrase.id} className="phrase-card">
            {editingId === phrase.id ? (
              <>
                <EditPhrase
                  phrase={phrase}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              </>
            ) : (
              <>
                <p className="phrase-text">"{phrase.text}"</p>
                <p className="phrase-author">— {phrase.author || "Anonymous"}</p>

                {phrase.image && (
                  <img
                    src={phrase.image}
                    alt="user submitted"
                    className="phrase-image"
                    style={{
                      maxWidth: "100%",
                      borderRadius: "10px",
                      marginTop: "1rem",
                    }}
                  />
                )}

                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(phrase.id)}
                    aria-label="Edit phrase"
                  >
                    <img src={editIcon} alt="button to edit" />
                  </button>

                  <button
                    className="delete-phrase-btn"
                    onClick={() => handleDeleteClick(phrase.id)}
                    aria-label="Eliminar frase"
                  >
                    <img src={trashIcon} alt="Eliminar" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}

      {showModal && (
        <WarningDeleteModal
          onClose={() => setShowModal(false)}
          handleConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default PhraseList;
