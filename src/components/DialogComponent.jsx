import { useEffect, useState } from 'react';
import Icon from './IconComponent';

const Dialog = ({ isOpen, onClose, title, children, styleClass, width, contentHeight }) => {
    useEffect(() => {

        if (isOpen) {
            document.body.classList.add('no-scroll');

        } else {
            document.body.classList.remove('no-scroll');
        }
        
        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div data-aos="none" className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-800 bg-opacity-50" >
            <div id='DialogContainer' className={"bg-colorWhite rounded-2xl shadow-lg w-96 relative " + styleClass} style={{width: width}}>
                <div id='DialogHeader' className="flex justify-between items-center py-4 px-8 border-b">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <Icon name={'close'} />
                    </button>
                </div>

                <div id='DialogContent' className="py-6  overflow-y-auto" style={{ maxHeight: contentHeight }}>
                    {children}
                </div>
            
            </div>
        </div>
    );
};

export default Dialog
