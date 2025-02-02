import React, { useState } from 'react';

import { IconType } from 'react-icons';
import { FaEyeSlash } from 'react-icons/fa6';

import '../styles/TituloModal.css';

interface ButtonArray {
    title: string;
    icon: IconType;
    onShow: () => void;
}

// Props
interface TituloModalProps {
    title: string;
    children: React.ReactNode;
    buttons?: ButtonArray[];
    isShowing?: boolean;
    setIsShowing?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TituloModal: React.FC<TituloModalProps> = ({ title, children, buttons, isShowing, setIsShowing = (() => { }) }) => {

    const [currentButton, setCurrentButton] = useState<number | null>(0);

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
                    <div className="modal-subtitle-container-right">
                        {buttons && !isShowing && buttons.map((button, i) => (
                            <div key={i} className="icon-container">
                                <button.icon
                                    className='icon-registro'
                                    onClick={() => { button.onShow(); setCurrentButton(i + 1); }}
                                />
                                <span className="tooltip-text">{button.title}</span>
                            </div>
                        ))}
                        {isShowing && (
                            <FaEyeSlash
                                className='icon-close-registro'
                                onClick={() => { setIsShowing(false); setCurrentButton(0) }}
                            />
                        )}
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

export { TituloModal };