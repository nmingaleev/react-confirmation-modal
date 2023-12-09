import { useContext } from 'react';

import { ModalContext } from './context';

export const useModal = () => {
    const modalContext = useContext(ModalContext);

    const open = async (modal) => {
        const reactionPromise = new Promise((resolve) => {
            modalContext.render(modal, resolve);
        });

        return reactionPromise;
    };

    return {
        open,
    }
}