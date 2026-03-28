import React from "react";
import { Phone, Mail } from "lucide-react";

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
                    {/* Facebook Icon (Simple Icons Path) */}
                    <a href="https://www.facebook.com/Angelaventuraturismochanc/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en facebook">
                        <svg className="w-5 h-5 fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                    </a>

                    {/* Instagram Icon (Simple Icons Path) */}
                    <a href="https://www.instagram.com/p/DRU4YTCCc5o/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en instagram">
                        <svg className="w-5 h-5 fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.58.016 4.85.071 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.27.07 1.646.07 4.85s-.015 3.58-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.218.562-.478.96-.897 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.227.413-1.27.057-1.647.07-4.85.07s-3.58-.015-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.562-.218-.96-.478-1.382-.897-.419-.419-.679-.818-.896-1.381-.164-.422-.36-1.056-.413-2.227-.057-1.27-.07-1.647-.07-4.85s.016-3.58.071-4.85c.054-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.27-.057 1.646-.07 4.85-.07zm0 3.663a6.177 6.177 0 100 12.354 6.177 6.177 0 000-12.354zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
                        </svg>
                    </a>

                    {/* TikTok Icon (Official Path) */}
                    <a href="https://www.tiktok.com/@angelaventurachanchamayo" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en tiktok">
                        <svg className="w-5 h-5 fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.525.02c1.31 0 2.591.233 3.824.706.155.058.234.239.177.394a1.13 1.13 0 0 1-1.077.747h-.01a7.114 7.114 0 0 0-1.2.148c-.068.016-.089.103-.042.155.159.18.31.368.455.565.485.66.76 1.442.791 2.257.004.14-.078.267-.21.314-1.246.438-2.618.438-3.864 0a.333.333 0 0 1-.22-.314c.031-.815.306-1.597.791-2.257.145-.197.296-.385.455-.565.047-.052.026-.139-.042-.155a7.114 7.114 0 0 0-1.2-.148h-.01c-.46 0-.895-.278-1.077-.747a.333.333 0 0 1 .177-.394 10.662 10.662 0 0 1 3.824-.706zM9.907 10.1c-1.637 0-3.048 1.114-3.419 2.704-.047.2-.224.343-.43.343H3.456a.333.333 0 0 0-.327.393c.4 2.39 2.47 4.211 4.965 4.211 1.638 0 3.048-1.114 3.419-2.704.047-.2.224-.343.43-.343h2.602a.333.333 0 0 0 .327-.393c-.4-2.39-2.47-4.211-4.965-4.211z"></path>
                            <path d="M19.14 7.5c-1.31 0-2.591-.233-3.824-.706a.333.333 0 0 1-.177-.394c.182-.469.617-.747 1.077-.747h.01c.404 0 .807.05 1.2.148.068.016.089.103.042.155a12.87 12.87 0 0 1-.455.565c-.485.66-.76 1.442-.791 2.257-.004.14.078.267.21.314.415.146.85.222 1.288.222.184 0 .333.15.333.333v3.333c0 .184-.15.333-.333.333h-2.602a.333.333 0 0 1-.327-.393c.4-2.39 2.47-4.211 4.965-4.211.184 0 .333-.15.333-.333V7.833c0-.184-.15-.333-.333-.333z"></path>
                        </svg>
                    </a>

                    {/* WhatsApp Icon (Official Path) */}
                    <a href="https://wa.link/exn5e4" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100 transition shadow-sm" target="_blank" rel="noopener noreferrer" aria-label="Visítanos en whatsapp">
                        <svg className="w-5 h-5 fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                        </svg>
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