import React from 'react';

export default function Contacts() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800">
          Contáctanos
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
          Escríbenos y te responderemos a la brevedad.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">
                  <strong>Teléfono:</strong> +51 964 534 249
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <strong>Email:</strong> ventas@angeladventure.pe
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <strong>WhatsApp:</strong> +51 902 498 111
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Para consultas y reservas, contáctanos directamente por WhatsApp o teléfono.
            </p>
            <a
              href="https://wa.link/exn5e4"
              className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp mr-2"></i>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
