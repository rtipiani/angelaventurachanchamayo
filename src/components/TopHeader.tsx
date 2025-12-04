const TopHeader: React.FC = () => {
    return (
        <section className="bg-red-600 hidden lg:flex md:items-center md:justify-center md:py-4 md:px-8">
            <div className="flex items-center space-x-12 text-sm">     
                <div>
                    <a href="tel:51964534249" className="text-white rounded flex items-center gap-1 py-1 px-2 text-md font-medium" aria-label="Llamar">
                        <i className="fas fa-phone text-xl text-white"></i>
                        <span className="sr-only">Llámanos:</span>
                        +51 964 534 249
                    </a>
                </div>
                <div className="flex space-x-4 text-xl">
                    <a href="https://www.facebook.com/Angelaventuraturismochanc/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en facebook">
                        <i className="fa-brands fa-facebook-f text-red-600"></i>
                    </a>
                    <a href="https://www.instagram.com/p/DRU4YTCCc5o/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en instagram">
                        <i className="fa-brands fa-instagram text-red-600"></i>
                    </a>
                    <a href="https://www.tiktok.com/@angelaventurachanchamayo" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en tiktok">
                        <i className="fa-brands fa-tiktok text-red-600"></i>
                    </a>
                    <a href="https://wa.link/exn5e4" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en whatsaoo">
                        <i className="fa-brands fa-whatsapp text-red-600"></i>
                    </a>
                </div>
                <div>
                    <a href="mailto:angelaventurachanchamayo@gmail.com" className="text-white hover:underline rounded flex items-center gap-2 py-2 px-4 text-lg" aria-label="Enviar un correo">
                        <i className="fas fa-envelope text-xl text-white"></i>
                        angelaventurachanchamayo@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;