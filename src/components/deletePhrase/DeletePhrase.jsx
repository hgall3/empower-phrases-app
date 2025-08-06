import { useState } from "react";
import "./DeletePhrase.scss";
import trashIcon from "../../assets/trash.svg";

function DeletePhrase({ id, onDelete }) {

    const [showModal, setShowSuccessModal] = useState(false);

  const handleClick = () => {
    setShowSuccessModal(true);
  };

  const handleConfirm = () => {
    onDelete(id);
    setShowSuccessModal(false);
  };

  return (
    <>
      <button className="delete-phrase-btn" onClick={handleClick} aria-label="Eliminar frase">
        <img src={trashIcon} alt="Eliminar" />
      </button>
        {showModal && (
        <WarningDeleteModal onClose={() => setShowSuccessModal(false) } handleConfirm= {handleConfirm}/>
      )}
    </>
  );
}

export default DeletePhrase;