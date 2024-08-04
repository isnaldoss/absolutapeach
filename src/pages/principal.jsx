import React from 'react'
import vodka1img from '../images/ingredient_absolut-apeach_1x1_5625ea0b0dd4bf2969fab3d0d7760bed.jpg'
import SessaoProdutos from './sections/sessaoprodutos';
import SessaoContato from './sections/sessaocontato';

const parteprincipal = () =>{
    return (
        <div className="bg-gray-100 min-h-screen">
          {/* Hero Section */}
          <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${vodka1img})` }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Descubra o Sabor da Absolut Apeach</h1>
                    <p className="text-lg md:text-xl mb-8">Um sabor irresistível de pêssego com a qualidade única da Absolut Vodka</p>
                    <a href="#products" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Saiba Mais</a>
                </div>
          </div>
      
          {/* About Section */}
          <section id="about" className="py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Sobre a Absolut Apeach</h2>
              <p className="text-lg mb-8">
                Absolut Apeach é uma vodka premium que oferece um sabor de pêssego delicado e irresistível.
                Produzida com a mesma qualidade e dedicação que caracteriza todas as vodkas Absolut.
              </p>
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">Entre em Contato</a>
            </div>
          </section>
      
        <SessaoProdutos/>
        
        <SessaoContato/>
          
        </div>
      );
      
}

export default parteprincipal;