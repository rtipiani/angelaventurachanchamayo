import socio1 from "../assets/images/mincetur.png";
import socio2 from "../assets/images/promperu.png";
import socio3 from "../assets/images/dircetur.png";
import socio4 from "../assets/images/ytuqueplanes.png";

const NuestrosSocios = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto text-center px-4">
                
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                    Socios Estratégicos
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                    <img src={socio1.src} alt="Logo Mincetur" width="200" height="80" className="w-full max-h-20 object-contain" loading="lazy" />
                    <img src={socio2.src} alt="Logo PromPerú" width="200" height="80" className="w-full max-h-20 object-contain" loading="lazy" />
                    <img src={socio3.src} alt="Logo Dircetur Junín" width="200" height="80" className="w-full max-h-20 object-contain" loading="lazy" />
                    <img src={socio4.src} alt="Logo Y tú que planes?" width="200" height="80" className="w-full max-h-20 object-contain" loading="lazy" />
                </div>

            </div>
        </section>
    );
};

export default NuestrosSocios;