import React, { useState } from 'react';

import { IconType } from 'react-icons';
import { FaEyeSlash } from 'react-icons/fa6';

import './ContenidoModal.css';

interface ModalContent {
    label: string;
    icon?: IconType;
    content: ((setView: (view: number) => void) => React.ReactNode) | React.ReactElement;
}

// Props
type ContenidoModalProps = ({
    title: string;
    modalContent: ModalContent[];
    children?: never;
} | {
    title: string;
    modalContent?: never;
    children: React.ReactNode;
})

const ContenidoModal: React.FC<ContenidoModalProps> = ({ title, modalContent, children }) => {

    const [currentView, setCurrentView] = useState<number>(0);
    const [hideButtons, setHideButtons] = useState<boolean>(true);

    const [isShowing, setIsShowing] = useState(false);

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <div className="modal-title-container">
                    <div className="modal-subtitle-container-left">
                        <div className="red-item"></div>
                        <div className='modal-subtitle'>
                            {(isShowing && modalContent) && currentView ? modalContent[currentView].label : title}
                        </div>
                    </div>
                    {/* Hecho con DeepSeek, podría causar errores */}
                    <div className="modal-subtitle-container-right">
                        {modalContent && (
                            <div className="animation-wrapper">
                                {/* Botones principales */}
                                {hideButtons && (
                                    <div className={`buttons-group ${isShowing ? "hide" : "show"}`}>
                                        {modalContent.slice(1).map((content, i) => (
                                            <>
                                                {content.icon && (
                                                    <div key={i + 1} className="icon-container">
                                                        <content.icon
                                                            className='icon-registro'
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    setHideButtons(false)
                                                                }, 200);
                                                                setCurrentView(i + 1);
                                                                setIsShowing(true);
                                                            }}
                                                        />
                                                        <span className="tooltip-text">{content.label}</span>
                                                    </div>
                                                )}
                                            </>
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
                                                setCurrentView(0)
                                            }}
                                            style={{ position: 'absolute', right: 0 }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <hr className='modal-horizontal-line' />
            </div>
            <div className='modal-title-body'>
                {modalContent &&
                    (modalContent[currentView].content instanceof Function
                        ? modalContent[currentView].content((view: number) => {
                            setCurrentView(view);
                            setTimeout(() => {
                                setHideButtons(false);
                            }, 200);
                            setIsShowing(true);
                        })
                        : modalContent[currentView].content
                    )}
                {children && children}
            </div>
        </>
    );
};

export { ContenidoModal };

// {modalContent && modalContent[currentView].content((view: number) => {
//     setCurrentView(view);
//     setTimeout(() => {
//         setHideButtons(false)
//     }, 200);
//     setIsShowing(true);
// })}