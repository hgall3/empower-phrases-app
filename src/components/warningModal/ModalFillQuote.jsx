import ReactDOM from "react-dom";
import "./ModalFillQuote.scss";

function Modal({ message, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;