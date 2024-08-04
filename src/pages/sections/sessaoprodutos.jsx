import React from 'react'
import abraspberry from '../sections/abraspberry.jpg'
import abpears from '../sections/abpears.jpg'
import abpeach from '../sections/abpeac.jpg'
const SessaoProdutos = () =>{
    return(
        <>
        <section id="products" className="py-16 bg-white sectionx">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Nossos Produtos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-200 p-6 rounded-lg">
                <img src={abraspberry} alt="Absolut Vodka Raspberry" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">Absolut Vodka Raspberry</h3>
                <p className="text-gray-700">Uma vodka premium com o frescor vibrante de framboesas maduras, Absolut Vodka Raspberry combina notas doces e frutadas com a pureza clássica da vodka Absolut. Ideal para coquetéis refrescantes ou para desfrutar pura, ela oferece um sabor leve e delicioso.</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg">
                <img src={abpears} alt="Absolut Vodka Pears" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">Absolut Vodka Pears</h3>
                <p className="text-gray-700">Absolut Vodka Pears oferece um sabor refrescante e frutado de peras maduras, combinando a suavidade da vodka Absolut com a doçura natural da fruta. Ideal para criar coquetéis elegantes e aromáticos, essa vodka é perfeita para quem aprecia uma bebida sofisticada com um toque de frescor frutal.</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg">
                <img src={abpeach} alt="Absolut Vodka Apeach" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">Absolut Vodka Apeach</h3>
                <p className="text-gray-700">Absolut Vodka Apeach é uma vodka de sabor sofisticado com uma infusão de pêssego, que proporciona uma combinação única de suavidade e doçura. Com seu perfil aromático e frutado, é ideal para quem busca uma bebida premium que se destaca em coquetéis ou pode ser apreciada sozinha.</p>
              </div>
            </div>
          </div>
        </section></>
    );
};

export default SessaoProdutos;