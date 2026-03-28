import React from "react";
import logo from "../assets/images/logo.webp";
import { MapPin, Phone, Mail, BookOpen } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.facebook.com/Angelaventuraturismochanc/",
    label: "Facebook",
    icon: FaFacebookF
  },
  {
    href: "https://www.instagram.com/p/DRU4YTCCc5o/",
    label: "Instagram",
    icon: FaInstagram
  },
  {
    href: "https://www.tiktok.com/@angelaventurachanchamayo",
    label: "TikTok",
    icon: FaTiktok
  },
  {
    href: "https://wa.link/exn5e4",
    label: "WhatsApp",
    icon: FaWhatsapp
  }
];

export default function Footer() {
  return (
    <footer className="bg-red-600 text-gray-200 py-12 mt-10" role="contentinfo">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <img src={logo.src} alt="Logo Angel Aventura Tours - Operador Turístico" className="w-36 mb-4" />
          <p className="text-white text-sm leading-relaxed">
            Agencia de viajes y turismo con más de 17 años de experiencia.
            Viaja con los mejores por toda la Selva Central.
          </p>
        </div>

        {/* ENLACES */}
        <section aria-labelledby="footer-links-title">
          <h3 id="footer-links-title" className="text-white font-semibold mb-4 text-lg">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Inicio", href: "/" },
              { label: "Nosotros", href: "/nosotros" },
              { label: "Oxapampa", href: "/oxapampa" },
              { label: "Chanchamayo", href: "/chanchamayo" },
              { label: "Galería", href: "/galeria" },
              { label: "Contáctanos", href: "/contactanos" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-white focus:text-white focus:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* INFORMACIÓN */}
        <section aria-labelledby="footer-info-title">
          <h3 id="footer-info-title" className="text-white font-semibold mb-4 text-lg">Información</h3>
          <address className="not-italic space-y-3 text-sm text-white">
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-white shrink-0" strokeWidth={2} aria-hidden="true" />
                <span>Jr. Tarma N° 29O, Chanchamayo, La Merced</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white shrink-0" strokeWidth={2} aria-hidden="true" />
                <a href="tel:+51964534249" className="hover:underline focus:ring-2 focus:ring-white/50 rounded px-1">+51 964 534 249</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white shrink-0" strokeWidth={2} aria-hidden="true" />
                <a href="tel:+51902498111" className="hover:underline focus:ring-2 focus:ring-white/50 rounded px-1">+51 902 498 111</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-white shrink-0" strokeWidth={2} aria-hidden="true" />
                <a href="mailto:ventas@angeladventure.pe" className="hover:underline focus:ring-2 focus:ring-white/50 rounded px-1">ventas@angeladventure.pe</a>
              </li>
              <li className="flex items-center">
                <a
                  href="/nuestras-politicas"
                  className="hover:text-white transition-colors flex items-center focus:ring-2 focus:ring-white/50 rounded px-1"
                >
                  <BookOpen className="w-5 h-5 mr-3 text-white shrink-0" strokeWidth={2} aria-hidden="true" />
                  Nuestras Políticas
                </a>
              </li>
            </ul>
          </address>
        </section>

        {/* REDES SOCIALES */}
        <section aria-labelledby="footer-social-title">
          <h3 id="footer-social-title" className="text-white font-semibold mb-4 text-lg">Síguenos</h3>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} de Angel Aventura Tours (abre en nueva pestaña)`}
                  className="bg-white p-2 rounded-full flex items-center justify-center w-10 h-10 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 transition shadow-sm text-red-600 focus:outline-none"
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </section>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-100 text-sm mt-10 border-t border-orange-500 pt-6">
        ©2025 Angel Aventura Tours. Todos los derechos reservados.
      </div>
    </footer>
  );
}
