import './Modal.css';

export const Modal = ({
    header,
    content,
    confirmText,
    rejectText,
    onAction
}) => {
    const handleReject = () => onAction(false);
    const handleConfirm = () => onAction(true);

    return (
        <div className='modal-wrapper'>
             <div className='modal'>
                <div className='modal-header'>
                    {header}
                </div>

                <div className='modal-content'>
                    {content}
                </div>

                <div className='modal-actions'>
                    <button onClick={handleReject}>{rejectText}</button>

                    <button onClick={handleConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>
    );
}