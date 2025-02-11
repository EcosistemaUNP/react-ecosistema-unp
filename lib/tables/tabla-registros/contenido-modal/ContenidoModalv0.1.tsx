import React, { useEffect, useState } from 'react';

import { IconType } from 'react-icons';
import { FaEyeSlash } from 'react-icons/fa6';

import './ContenidoModal.css';

interface ButtonArray {
    title: string;
    icon: IconType;
    onShow: () => void;
}

// interface ModalContent {
//     label: string;
//     icon: IconType;
//     content: React.ReactElement | React.ReactElement[];
// }

// Props
interface ContenidoModalProps {
    title: string;
    children: React.ReactNode;
    buttons?: ButtonArray[];
    isShowing?: boolean;
    setIsShowing?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContenidoModal: React.FC<ContenidoModalProps> = ({ title, children, buttons, isShowing, setIsShowing = (() => { }) }) => {

    const [currentButton, setCurrentButton] = useState<number | null>(0);
    const [hideButtons, setHideButtons] = useState<boolean>(true);

    useEffect(() => {
        if (isShowing) {
            setTimeout(() => {
                setHideButtons(false)
            }, 200);
            setHideButtons(true);
        }
    }, [isShowing]);

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <div className="modal-title-container">
                    <div className="modal-subtitle-container-left">
                        <div className="red-item"></div>
                        <div className='modal-subtitle'>
                            {(isShowing && buttons) && currentButton ? buttons[currentButton - 1].title : title}
                        </div>
                    </div>
                    {/* Hecho con DeepSeek, podría causar errores */}
                    <div className="modal-subtitle-container-right">
                        <div className="animation-wrapper">
                            {/* Botones principales */}
                            {hideButtons && (
                                <div className={`buttons-group ${isShowing ? "hide" : "show"}`}>
                                    {buttons && buttons.map((button, i) => (
                                        <div key={i} className="icon-container">
                                            <button.icon
                                                className='icon-registro'
                                                onClick={() => {
                                                    setTimeout(() => {
                                                        setHideButtons(false)
                                                    }, 200);
                                                    button.onShow();
                                                    setCurrentButton(i + 1);
                                                }}
                                            />
                                            <span className="tooltip-text">{button.title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Botón de cerrar (posicionado absolutamente) */}
                            {!hideButtons && (
                                <div className={`close-group ${isShowing ? "show" : "hide"}`}>
                                    <FaEyeSlash
                                        className='icon-close-registro'
                                        onClick={() => {
                                            setTimeout(() => {
                                                setHideButtons(true)
                                            }, 200);
                                            setIsShowing(false);
                                            setCurrentButton(0)
                                        }}
                                        style={{ position: 'absolute', right: 0 }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <hr className='modal-horizontal-line' />
            </div>
            <div className='modal-title-body'>
                {children}
            </div>
        </>
    );
};

export { ContenidoModal };