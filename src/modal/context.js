import { createContext, useState } from "react"
import { createPortal } from "react-dom";

import { Modal } from './Modal';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({});

    const render = (modal, handleAction) => {
        setModal({
            ...modal,
            action: (result) => {
                setIsOpen(false);

                handleAction(result);
            },
        });

        setIsOpen(true);
    }

    return (
        <ModalContext.Provider value={{ render }}>
            {children}

            {isOpen && createPortal(
                <Modal
                    header={modal?.header}
                    content={modal?.content}
                    confirmText={modal?.confirmText}
                    rejectText={modal?.rejectText}
                    onAction={modal?.action}
                />,
                document.body
            )}
        </ModalContext.Provider>
    );
}