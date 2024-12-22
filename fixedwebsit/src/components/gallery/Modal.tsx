// components/gallery/Modal.tsx

"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./gallery.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
