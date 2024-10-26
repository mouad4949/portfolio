'use client'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(); // Créer une référence pour le formulaire

  const sendEmail = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page lors de l'envoi du formulaire

    const userEmail = form.current.user_email.value; // Récupérer l'e-mail de l'utilisateur

    // Remplacer 'your_email@example.com' par ton adresse e-mail
    const myEmail = 'mouadrguibi900@gmail.com'; 

    emailjs
      .sendForm('service_kakk2ob', 'POrtfolio_id23016022', form.current, {
        publicKey: 'bnd0WYIuITlPoZpi5',
        // Passer les variables personnalisées
        to_email: myEmail, // Ton adresse e-mail pour recevoir les messages
        user_email: userEmail // E-mail de l'utilisateur pour référence
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="isolate px-4 py-10 sm:py-8 lg:px-8">
      <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-purple-500">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="from_name" // Utilise 'from_name' pour le template
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white font-medium placeholder:text-white shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-purple-500">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="to_name" // Utilise 'to_name' pour le template
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white font-medium placeholder:text-white shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-purple-500">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="user_email" // Assurez-vous que le nom est correct pour le template
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white font-medium placeholder:text-white shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-purple-500">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message" // Assurez-vous que le nom est correct pour le template
                rows={4}
                className="block w-full rounded-md border-none px-3.5 py-2 bg-transparent text-white placeholder:text-gray-400 shadow-sm 
                ring-[1px] ring-gray-400 focus:ring-[1px] focus:ring-gray-500 transition duration-200 ease-in-out
                font-[Inter, sans-serif] font-bold"
                defaultValue={''}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}