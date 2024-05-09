import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import TheForm from '@/pages/form/TheForm.jsx';
import Home from '@/pages/home/Home.jsx';
import FormPage from "@/pages/form/FormPage.jsx";

export default function App() {
    const location = useLocation(); // Для отслеживания маршрута
    const options = {
        autoConfig: true, // автоматическая конфигурация
        debug: false,     // отладочная информация
    };

    // Инициализация пикселя Facebook
    ReactPixel.init('388751950664047', options);
    ReactPixel.init('1094581028510610', options);

    // Отслеживание события PageView при каждом изменении маршрута
    useEffect(() => {
        ReactPixel.track('PageView');
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<TheForm />} />
            <Route path="/formPage" element={<FormPage />}/>
        </Routes>
    );
}
