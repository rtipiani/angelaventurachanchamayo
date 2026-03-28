const TopHeader: React.FC = () => {
    return (
        <section className="bg-red-600 hidden lg:flex md:items-center md:justify-center md:py-4 md:px-8">
            <div className="flex items-center space-x-12 text-sm">     
                <div>
                    <a href="tel:51964534249" className="text-white rounded flex items-center gap-2 py-1 px-2 text-md font-medium" aria-label="Llamar">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span className="sr-only">Llámanos:</span>
                        +51 964 534 249
                    </a>
                </div>
                <div className="flex space-x-4 text-xl">
                    <a href="https://www.facebook.com/Angelaventuraturismochanc/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en facebook">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/p/DRU4YTCCc5o/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en instagram">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2442 0 2.71.01 3.42.042.673.03 1.144.137 1.55.294.42.164.774.382 1.13.738.355.356.574.71.738 1.13.157.406.264.877.295 1.55.031.71.042 2.686.042 3.42s-.01 2.71-.042 3.42c-.031.673-.138 1.144-.294 1.55a3.197 3.197 0 0 1-1.868 1.868c-.406.157-.877.264-1.55.294-.71.032-2.686.042-3.42.042s-2.71-.01-3.42-.042c-.673-.031-1.144-.138-1.55-.294a3.197 3.197 0 0 1-1.868-1.868c-.157-.406-.264-.877-.294-1.55-.032-.71-.042-2.686-.042-3.42s.01-2.71.042-3.42c.031-.673.138-1.144.294-1.55.164-.42.382-.774.738-1.13.356-.356.71-.574 1.13-.738.406-.157.877-.264 1.55-.295.71-.031 2.686-.042 3.42-.042zm-3.41 12.042l.012.012c.71.03 1.143.133 1.543.287.41.157.708.365.992.649.284.284.492.582.649.992.154.4.257.833.287 1.543.031.708.042 1.25.042 3.42s-.01 2.712-.042 3.42c-.03 0.71-.133 1.144-.287 1.543-.157.41-.365.708-.649.992-.284.284-.582.492-.992.649-.4.154-.833.257-1.543.287-.708.031-1.25.042-3.42.042s-2.712-.01-3.42-.042c-.71-.03-1.144-.133-1.543-.287-.41-.157-.708-.365-.992-.649-.284-.284-.492-.582-.649-.992-.154-.4-.257-.833-.287-1.543-.031-.708-.042-1.25-.042-3.42s.01-2.712.042-3.42c.03-.71.133-1.144.287-1.543.157-.41.365-.708.649-.992.284-.284.582-.492.992-.649.4-.154.833-.257 1.543-.287.708-.031 1.25-.042 3.42-.042zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm3.5-2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@angelaventurachanchamayo" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en tiktok">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12.525.02c1.31 0 2.591.233 3.824.706.155.058.234.239.177.394a1.13 1.13 0 0 1-1.077.747h-.01a7.114 7.114 0 0 0-1.2.148c-.068.016-.089.103-.042.155.159.18.31.368.455.565.485.66.76 1.442.791 2.257.004.14-.078.267-.21.314-1.246.438-2.618.438-3.864 0a.333.333 0 0 1-.22-.314c.031-.815.306-1.597.791-2.257.145-.197.296-.385.455-.565.047-.052.026-.139-.042-.155a7.114 7.114 0 0 0-1.2-.148h-.01c-.46 0-.895-.278-1.077-.747a.333.333 0 0 1 .177-.394 10.662 10.662 0 0 1 3.824-.706zM9.907 10.1c-1.637 0-3.048 1.114-3.419 2.704-.047.2-.224.343-.43.343H3.456a.333.333 0 0 0-.327.393c.4 2.39 2.47 4.211 4.965 4.211 1.638 0 3.048-1.114 3.419-2.704.047-.2.224-.343.43-.343h2.602a.333.333 0 0 0 .327-.393c-.4-2.39-2.47-4.211-4.965-4.211z"></path>
                            <path d="M19.14 7.5c-1.31 0-2.591-.233-3.824-.706a.333.333 0 0 1-.177-.394c.182-.469.617-.747 1.077-.747h.01c.404 0 .807.05 1.2.148.068.016.089.103.042.155a12.87 12.87 0 0 1-.455.565c-.485.66-.76 1.442-.791 2.257-.004.14.078.267.21.314.415.146.85.222 1.288.222.184 0 .333.15.333.333v3.333c0 .184-.15.333-.333.333h-2.602a.333.333 0 0 1-.327-.393c.4-2.39 2.47-4.211 4.965-4.211.184 0 .333-.15.333-.333V7.833c0-.184-.15-.333-.333-.333z"></path>
                        </svg>
                    </a>
                    <a href="https://wa.link/exn5e4" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en whatsaoo">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="mailto:angelaventurachanchamayo@gmail.com" className="text-white hover:underline rounded flex items-center gap-2 py-2 px-4 text-lg" aria-label="Enviar un correo">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        angelaventurachanchamayo@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;