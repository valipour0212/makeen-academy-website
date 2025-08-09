import {ReactNode} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

function GalleryImageModal({isOpen, onClose, children}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={onClose}
            >
                ✕
            </button>
            {children}
        </div>
    );
}

export default GalleryImageModal;