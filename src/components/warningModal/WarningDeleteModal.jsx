import React from 'react';
import './WarningDeleteModal.scss';

function WarningDeleteModal({ onClose, handleConfirm }) {
  return (
    <div className="warning-modal-overlay" onClick={onClose}>
      <div className="warning-modal" onClick={(e) => e.stopPropagation()}>
        <p>Are you sure you want to delete this phrase?</p>
        <div className="buttons">
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default WarningDeleteModal;
