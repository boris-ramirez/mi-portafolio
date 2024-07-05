import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const FAQ: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageCount, setMessageCount] = useState<number>(0);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('messageCount') || '0', 10);
    setMessageCount(count);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (messageCount >= 10) {
      alert('Has alcanzado el límite de mensajes permitidos.');
      return;
    }

    if (form.current) {
      try {
        emailjs
          .sendForm('service_q67wyn7', 'template_9mc87sn', form.current, 'L81JFBqg7vMiIkLa2')
          .then(
            () => {
              console.log('SUCCESS!');
              alert('¡Mensaje enviado!');
              const newCount = messageCount + 1;
              setMessageCount(newCount);
              localStorage.setItem('messageCount', newCount.toString());
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('No se pudo enviar el mensaje. Por favor, inténtelo de nuevo.');
            }
          );
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        alert('Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.');
      }
    }
  };

  return (
    <section className="md:p-6 h-auto md:h-[55%] md:w-[30%] w-full px-4 overflow-y-auto self-center md:self-end text-black font-bold">
      <div className="md:max-w-md  mx-auto  bg-transparent shadow-md rounded-md">
        <h2 className="text-2xl text-white font-bold mb-4">Contáctanos</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Nombre o Empresa</label>
            <input
              type="text"
              name="name"
              required
              className=" p-1 mt-1 block w-full md:px-3 md:py-2 border border-gray-300 bg-slate-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Correo </label>
            <input
              type="email"
              name="email"
              required
              className=" p-1 mt-1 block w-full md:px-3 md:py-2 border border-gray-300 bg-slate-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Teléfono</label>
            <input
              type="text"
              name="phone"
              required
              className=" p-1 mt-1 block w-full md:px-3 md:py-2 border border-gray-300 bg-slate-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Información Adicional</label>
            <textarea
              name="message"
              required
              className=" p-1 mt-1 block w-full md:px-3 md:py-2 border border-gray-300 bg-slate-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-slate-800 text-white font-medium rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FAQ;
