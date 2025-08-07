import { useState } from "react";
import "./DeletePhrase.scss";
import trashIcon from "../../assets/trash.svg";
import WarningDeleteModal from '../warningModal/WarningDeleteModal';

function DeletePhrase({ id, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    onDelete(id);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="delete-phrase-btn"
        onClick={handleClick}
        aria-label="Delete phrase"
      >
        <img src={trashIcon} alt="Delete" />
      </button>
      {showModal && (
        <WarningDeleteModal
          onClose={handleClose}
          handleConfirm={handleConfirm}
          message="Are you sure you want to delete this phrase?"
          confirmText="Yes"
          cancelText="Cancel"
        />
      )}
    </>
  );
}

export default DeletePhrase;
