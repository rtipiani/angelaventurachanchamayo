import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const TopHeader: React.FC = () => {
    return (
        <section className="bg-red-600 hidden lg:flex md:items-center md:justify-center md:py-4 md:px-8">
            <div className="flex items-center space-x-12 text-sm">     
                <div>
                    <a href="tel:51964534249" className="text-white rounded flex items-center gap-2 py-1 px-2 text-md font-medium hover:text-orange-100 transition-colors" aria-label="Llamar">
                        <Phone className="w-5 h-5" strokeWidth={2.5} />
                        <span className="sr-only">Llámanos:</span>
                        +51 964 534 249
                    </a>
                </div>
                
                <div className="flex space-x-4">
                    {/* Facebook Icon (Official Library Component) */}
                    <a href="https://www.facebook.com/Angelaventuraturismochanc/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en facebook">
                        <FaFacebookF className="w-5 h-5" />
                    </a>

                    {/* Instagram Icon (Official Library Component) */}
                    <a href="https://www.instagram.com/p/DRU4YTCCc5o/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en instagram">
                        <FaInstagram className="w-5 h-5" />
                    </a>

                    {/* TikTok Icon (Official Library Component) */}
                    <a href="https://www.tiktok.com/@angelaventurachanchamayo" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en tiktok">
                        <FaTiktok className="w-5 h-5" />
                    </a>

                    {/* WhatsApp Icon (Official Library Component) */}
                    <a href="https://wa.link/exn5e4" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm text-red-600" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en whatsapp">
                        <FaWhatsapp className="w-5 h-5" />
                    </a>
                </div>

                <div>
                    <a href="mailto:angelaventurachanchamayo@gmail.com" className="text-white hover:underline rounded flex items-center gap-2 py-2 px-4 text-lg" aria-label="Enviar un correo">
                        <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                        angelaventurachanchamayo@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;