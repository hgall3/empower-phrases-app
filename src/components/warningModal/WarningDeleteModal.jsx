import React from 'react';
import './WarningDeleteModal.scss';


function WarningDeleteModal({ onClose, handleConfirm }) {
  return (
    <div className="warning-modal-overlay" onClick={onClose}>
      <div className="warning-modal" onClick={(e) => e.stopPropagation()}>
        <p>Successfully deleted</p>
        <button onClick={handleConfirm}>OK</button>
      </div>
    </div>
  );
}

export default WarningDeleteModal;
