import React from 'react';
import './WarningModal.scss';


function WarningModal({ onClose }) {
  return (
    <div className="warning-modal-overlay" onClick={onClose}>
      <div className="warning-modal" onClick={(e) => e.stopPropagation()}>
        <p>Successfully added.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default WarningModal;
