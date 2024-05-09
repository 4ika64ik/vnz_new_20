import { useState, useEffect } from 'react';
import WhatsAppIcn from '../../../public/icons/pngwing.com.png'
import TelegramIcn from '../../../public/icons/pngwing.com (2).png'
import './PopUp.css';
import TheForm from "@/pages/form/TheForm.jsx";

const Popup = () => {
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closeNotification = () => {
        setShowNotification(false);
    };

    return (
        <div className={`cookie-notification ${showNotification ? 'show' : ''} z-20` } >
            <div className="flex justify-between">
                <div className="flex items-center">
                    <a href="https://wa.me/message/DNXUJ4NVDLSXL1?src=qr"><img className="w-10 h-10" src={WhatsAppIcn}
                                                                               alt=""/></a>
                    <a href="https://t.me/@vnzhvisatoeu"><img className="w-10 h-10" src={TelegramIcn}
                                                              alt=""/></a>

                </div>
                <p>
                   +49 15510 379488
                </p>
            </div>
            <TheForm onClick={closeNotification} >
                Получить предложение
            </TheForm>
        </div>
    );
};

export default Popup;
