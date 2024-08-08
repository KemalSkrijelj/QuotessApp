import "./Modal.css";
import React, { useState } from "react";
const Modal = ({ onConfirm, message }) => {
  const [isActive, setIsActive] = useState(true);
  const handleConfirm = () => {
    setIsActive(false);
    if (onConfirm) {
      onConfirm();
    }
  };
  return (
    <>
      {isActive && (
        <div className="modal-conteiner">
          <div className="modal">
            <div className="modal-header">
              <p className="close" onClick={() => setIsActive(!isActive)}>
                &times;
              </p>
            </div>
            <div className="modal-content">{message}</div>
            <div className="modal-footer">
              <button className="btn btn-submit" onClick={handleConfirm}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
