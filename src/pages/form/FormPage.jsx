import { useState } from 'react';
import Form from "./Form";
import axios from 'axios';
import Footer from "components/Footer/index.jsx";
import ReactPixel from 'react-facebook-pixel';


export default function FormPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nick, setNick] = useState('');

    const handleSubmit = async () => {
        setName('');
        setPhone('');
        try {
            const text = `Новая заявка по ВНЖ!\nИмя: ${name}\nТелефон: ${phone}\nНик телеграма: ${nick}`;
            const response = await axios.post('https://api.telegram.org/bot6806809280:AAFqNvMpRw2ZsyyuFIpzoLd331rvHR1y4mQ/sendMessage', {
                text,
                chat_id: '-1002107069189',
            });
            console.log(response.data);
            ReactPixel.track('Lead');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ backgroundImage: `url('https://bogatyr.club/uploads/posts/2023-01/1675015595_bogatyr-club-p-fon-dlya-saita-html-fon-instagram-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="flex flex-col justify-center items-center py-12">
                <p className="text-white text-lg font-semibold mb-8">
                    Заполните форму и мы свяжемся с Вами в ближайшее время
                </p>
                <Form setName={setName} setPhone={setPhone} setNick={setNick} />
            </div>
            <div className="flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md lg:w-96 w-full md:w-96">
                    <div>
                        <label>
                            <p className="text-gray-700 font-semibold">Имя</p>
                        </label>
                        <input
                            type="text"
                            placeholder="Имя"
                            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 ocus:ring-blue-400  focus:border-none md:w-80 "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>
                            <p className="text-gray-700 font-semibold mt-3">Ник телеграма</p>
                        </label>
                        <input
                            type="text"
                            placeholder="Ник телеграма"
                            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 ocus:ring-blue-400  focus:border-none md:w-80 "
                            value={nick}
                            onChange={(e) => setNick(e.target.value)}
                        />
                    </div>

                    <div className="mt-6">
                        <label>
                            <p className="text-gray-700 font-semibold">Телефон</p>
                        </label>
                        <input
                            type="tel"
                            placeholder="Телефон"
                            className="w-full border-2 border-gray-300 rounded-md px-3 py-2 mt-1 transition delay-75 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none md:w-80 "
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button onClick={handleSubmit} className="text-blue-400 border border-blue-400 w-full py-2 hover:bg-blue-50 rounded">
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
