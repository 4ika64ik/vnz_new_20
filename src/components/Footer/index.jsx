import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import TheForm from "@/pages/form/TheForm.jsx";
import Popup from "components/pop-up/ PopUp.jsx";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300">
      {/* Contact */}
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">


          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  className="footer-icon"
                  src="/instagram.svg"А
                  alt="instagram"
                />
              </a>
              <a href="https://github.com/" target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a href="https://www.telegram.com/" target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              © 2010-2024  Все права защищены. Политика конфиденциальности | Условия использования
            </p>
          </div>
        </div>
        <Popup />
      </footer>
    </div>
  );
}
