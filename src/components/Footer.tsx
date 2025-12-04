import logo from "../assets/images/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-gray-200 py-12 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <img src={logo.src} alt="Angel Aventura Tours" className="w-36 mb-4" />
          <p className="text-sm leading-relaxed">
            Agencia de viajes y turismo con más de 17 años de experiencia.
            Viaja con los mejores por toda la Selva Central.
          </p>
        </div>

        {/* ENLACES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
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
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* INFORMACIÓN */}
        <div>
          <h3 className="text-white font-semibold mb-4">Información</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <i className="fa-solid fa-location-dot mr-2"></i>
              Jr. Tarma N° 29O, Chanchamayo, La Merced
            </li>
            <li>
              <i className="fa-solid fa-phone mr-2"></i>
              +51 964 534 249
            </li>
            <li>
              <i className="fa-solid fa-phone mr-2"></i>
              +51 902 498 111
            </li>
            <li>
              <i className="fa-solid fa-envelope mr-2"></i>
              ventas@angeladventure.pe
            </li>
            <li>
              <a
                href="/nuestras-politicas"
                className="hover:text-white transition-colors"
              >
                <i className="fa-solid fa-book mr-2"></i>
                Nuestras Políticas
              </a>
            </li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4 mt-4 text-2xl">
            {[
              {
                href: "https://www.facebook.com/Angelaventuraturismochanc/",
                icon: "fa-facebook",
                label: "Facebook",
              },
              {
                href: "https://www.instagram.com/p/DRU4YTCCc5o/",
                icon: "fa-instagram",
                label: "Instagram",
              },
              {
                href: "https://www.tiktok.com/@angelaventurachanchamayo",
                icon: "fa-tiktok",
                label: "TikTok",
              },
              {
                href: "https://wa.link/exn5e4",
                icon: "fa-whatsapp",
                label: "WhatsApp",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} Angel Aventura Tours`}
                className="hover:text-white transition-colors"
              >
                <i className={`fa-brands ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-100 text-sm mt-10 border-t border-orange-500 pt-6">
        ©2025 Angel Aventura Tours. Todos los derechos reservados.
      </div>
    </footer>
  );
}
