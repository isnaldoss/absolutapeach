import React from 'react'

const SessaoContato = () =>{
    return(
        <>
        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gray-100 sectionx">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
    <p className="text-lg mb-8">
      Se você tiver alguma dúvida ou desejar saber mais sobre nossos produtos, entre em contato conosco. Preencha o formulário abaixo e nossa equipe responderá o mais breve possível.
    </p>
    

    <div className="flex justify-center">
      <form className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu Nome"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu E-mail"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Assunto da Mensagem"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Sua Mensagem"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Enviar
          </button>
          <a href="mailto:contact@absolut.com" className="text-blue-500 hover:underline">
            Ou envie um e-mail direto
          </a>
        </div>
      </form>
    </div>
  </div>
</section>


      </>
    );
};

export default SessaoContato;