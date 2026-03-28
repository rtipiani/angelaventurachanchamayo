import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const TopHeader: React.FC = () => {
    return (
        <section className="bg-red-600 hidden lg:flex md:items-center md:justify-center md:py-4 md:px-8" role="complementary" aria-label="Información de contacto y redes sociales">
            <div className="flex items-center space-x-12 text-sm">     
                <div>
                    <a href="tel:51964534249" className="text-white rounded flex items-center gap-2 py-1 px-2 text-md font-medium hover:text-orange-100 focus:text-orange-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors" aria-label="Llamar al +51 964 534 249">
                        <Phone className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                        <span className="sr-only">Llámanos al:</span>
                        +51 964 534 249
                    </a>
                </div>
                
                <nav className="flex space-x-4" aria-label="Enlaces a nuestras redes sociales">
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/Angelaventuraturismochanc/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 transition shadow-sm text-red-600 focus:outline-none" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook (abre en nueva pestaña)">
                        <FaFacebookF className="w-5 h-5" aria-hidden="true" />
                    </a>

                    {/* Instagram Icon */}
                    <a href="https://www.instagram.com/p/DRU4YTCCc5o/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 transition shadow-sm text-red-600 focus:outline-none" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram (abre en nueva pestaña)">
                        <FaInstagram className="w-5 h-5" aria-hidden="true" />
                    </a>

                    {/* TikTok Icon */}
                    <a href="https://www.tiktok.com/@angelaventurachanchamayo" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 transition shadow-sm text-red-600 focus:outline-none" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en TikTok (abre en nueva pestaña)">
                        <FaTiktok className="w-5 h-5" aria-hidden="true" />
                    </a>

                    {/* WhatsApp Icon */}
                    <a href="https://wa.link/exn5e4" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 transition shadow-sm text-red-600 focus:outline-none" target="_blank" rel="noopener noreferrer" aria-label="Chatea con nosotros en WhatsApp (abre en nueva pestaña)">
                        <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                    </a>
                </nav>

                <div>
                    <a href="mailto:angelaventurachanchamayo@gmail.com" className="text-white hover:underline rounded flex items-center gap-2 py-2 px-4 text-lg focus:ring-2 focus:ring-white/50 focus:outline-none" aria-label="Enviar un correo electrónico a angelaventurachanchamayo@gmail.com">
                        <Mail className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                        angelaventurachanchamayo@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;