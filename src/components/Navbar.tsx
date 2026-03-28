import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const menu = [
  	{ label: "Inicio", href: "/" },
  	{ label: "Nosotros", href: "/nosotros" },
  	{
    	label: "Paquetes Turísticos",
    	dropdown: [
      		{ label: "Oxapampa", href: "/oxapampa" },
      		{ label: "Chanchamayo", href: "/chanchamayo" },
      		{ label: "Selva Central", href: "/selva-central" },
    	],
  	},
  	{ label: "Full Day", href: "/full-day" },
  	{ label: "Escolares", href: "/escolares" },
  	{ label: "Galería", href: "/galeria" },
  	// { label: "Contáctanos", href: "/contactanos" },
];

const Navbar: React.FC<{ logoUrl: string }> = ({ logoUrl }) => {
  	const [isMenuOpen, setIsMenuOpen] = useState(false);
  	const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  	const [mobileDropdownOpenIndex, setMobileDropdownOpenIndex] = useState<number | null>(null);
  	const [activePath, setActivePath] = useState("/");

  	useEffect(() => {
    	setActivePath(window.location.pathname);
  	}, []);

  	const linkClass = (path: string) => `transition duration-200 ${
      	activePath === path
        ? "text-red-600 font-bold border-b-2 border-red-600 focus:outline focus:outline-red-600 focus:outline-offset-4"
        : "text-orange-800 hover:text-red-600 focus:outline focus:outline-red-600 focus:outline-offset-4"
    }`;

    // Accesibilidad por teclado
    const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

  	return (
    	<nav className="bg-white py-4 shadow-md relative z-50" role="navigation" aria-label="Navegación principal">
      		<div className="container mx-auto flex justify-between items-center px-4 lg:px-6">
        		<a href="/" className="flex items-center z-50 relative focus:outline-none focus:ring-4 focus:ring-red-100 rounded-lg" aria-label="Volver a la página de inicio de Angel Aventura Tours">
          			<img src={logoUrl} alt="Angel Aventura Tours - Operador Turístico calificado por MINCETUR" width="150" height="60" className="h-12 lg:h-16 object-contain" />
        		</a>
        		<ul className="hidden lg:flex items-center space-x-6 text-lg font-medium">
          			{menu.map((item, i) => item.dropdown ? (
              			<li key={i} className="relative group" onMouseEnter={() => setDesktopDropdownOpen(true)} onMouseLeave={() => setDesktopDropdownOpen(false)}>
                			<button 
                                type="button" 
                                className="flex items-center gap-2 text-orange-800 hover:text-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-8 rounded" 
                                aria-haspopup="true" 
                                aria-expanded={desktopDropdownOpen}
                                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                                onKeyDown={(e) => handleKeyDown(e, () => setDesktopDropdownOpen(!desktopDropdownOpen))}
                            >
                  				{item.label}
                  				<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${ desktopDropdownOpen ? "rotate-180" : "" }`} />
							</button>

                			<ul className={`absolute left-0 mt-3 w-48 bg-white shadow-xl rounded-lg py-2 text-orange-800 border border-orange-200/50 transition-all duration-200 origin-top z-50 before:absolute before:-top-3 before:left-0 before:w-full before:h-3 before:content-[''] ${desktopDropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`} role="menu" aria-label={`Submenú de ${item.label}`}>
                  				{item.dropdown.map((d, idx) => (
                    				<li key={idx} role="none">
                      					<a href={d.href} className={`block px-4 py-2 hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-none ${linkClass(d.href)}`} role="menuitem">
                        					{d.label}
                      					</a>
                    				</li>
                  				))}
                			</ul>
              			</li>
            		) : (
              			<li key={i}>
                			<a href={item.href} className={linkClass(item.href)}>
                  				{item.label}
                			</a>
              			</li>
            		))}
        		</ul>

        		<button 
					type="button" 
					title={isMenuOpen ? "Cerrar menú" : "Abrir menú"} 
					onClick={() => setIsMenuOpen(!isMenuOpen)} 
					className="lg:hidden text-3xl text-red-600 z-50 relative focus:outline-none focus:ring-4 focus:ring-red-100 rounded-lg p-1"
					aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
					aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
				>
            		{isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        		</button>
      		</div>

      		{/* Mobile Menu Backdrop */}
      		<div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${ isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible" }`} onClick={() => setIsMenuOpen(false)} aria-hidden="true" />

      		{/* Mobile Menu Content */}
      		<div 
                id="mobile-menu"
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-all duration-500 ease-in-out lg:hidden ${ isMenuOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95" }`}
                aria-hidden={!isMenuOpen}
            >
        		<div className="flex flex-col h-full pt-6 pb-6 px-6 overflow-y-auto">
          			<button 
                        type="button" 
                        className="self-end text-3xl text-red-600 mb-6 focus:outline-none focus:ring-4 focus:ring-red-100 rounded-lg p-1" 
                        onClick={() => setIsMenuOpen(false)} 
                        aria-label="Cerrar menú lateral"
                    >
            			<X className="w-8 h-8" />
          			</button>

          			<ul className="flex flex-col space-y-4 text-lg font-medium text-orange-900" role="menubar">
            			{menu.map((item, i) => item.dropdown ? (
                			<li key={i} className="border-b border-orange-100 pb-2" role="none">
                  				<button 
                                    type="button" 
                                    onClick={() => setMobileDropdownOpenIndex(mobileDropdownOpenIndex === i ? null : i)} 
                                    className="w-full flex justify-between items-center py-2 text-orange-800 hover:text-red-600 transition-colors focus:outline-none focus:text-red-700 font-semibold"
                                    aria-haspopup="true"
                                    aria-expanded={mobileDropdownOpenIndex === i}
                                >
                    				{item.label}
                    				<ChevronDown className={`w-5 h-5 transition-transform duration-300 ${ mobileDropdownOpenIndex === i ? "rotate-180" : "" }`} />
                  				</button>

                  				<div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${ mobileDropdownOpenIndex === i ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0" }`}
                                    role="menu"
                                    aria-label={`Submenú móvil de ${item.label}`}
                                >
                    				<ul className="pl-4 space-y-2 border-l-2 border-red-100 ml-2">
                      					{item.dropdown.map((d, idx) => (
                        					<li key={idx} role="none">
                          						<a 
                                                    href={d.href} 
                                                    className={`block py-2 text-sm text-gray-600 hover:text-red-600 transition-all duration-300 transform focus:text-red-700 ${ mobileDropdownOpenIndex === i ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0" }`} 
                                                    onClick={() => setIsMenuOpen(false)}
                                                    role="menuitem"
                                                >
                            						{d.label}
                          						</a>
                        					</li>
                      					))}
                    				</ul>
                  				</div>
                			</li>
              			) : (
                			<li key={i} className="border-b border-orange-100 pb-2" role="none">
                  				<a 
                                    href={item.href} 
                                    className={`block py-2 hover:text-red-600 transition-colors focus:text-red-700 focus:font-bold ${ activePath === item.href ? "text-red-600 font-bold" : "text-orange-800" }`} 
                                    onClick={() => setIsMenuOpen(false)}
                                    role="menuitem"
                                >
                    				{item.label}
                  				</a>
                			</li>
              			))}
          			</ul>

          			<div className="mt-auto pt-8">
            			<a href="https://wa.link/okkl9y" className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-red-200" onClick={() => setIsMenuOpen(false)} target="_blank" rel="noopener noreferrer" aria-label="Reservar ahora vía WhatsApp oficial">
              				Reserva Ahora
            			</a>
          			</div>
        		</div>
      		</div>
    	</nav>
  	);
};

export default Navbar;