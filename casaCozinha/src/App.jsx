import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AboutUs from './components/AboutUs';
import HomePage from './components/HomePage';

const allProducts = [
  // Cozinha
  { id: 1, category: 'cozinha', title: 'Filtro/Refil de Água Acqua Pure para Purificador Electrolux', price: '75,60', image: 'https://m.media-amazon.com/images/I/31jHHrsOqyL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Filtro-Refil-Acqua-Purificador-Electrolux/dp/B09BK73232?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=51fd4d3e054d290afab3e40f03ab558d&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 2, category: 'cozinha', title: 'Sanduicheira Elétrica Cadence Click', price: '113,05', image: 'https://m.media-amazon.com/images/I/51UxR8FHe-L._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-127V/dp/B0CDJ4L7CZ?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=1cbfdfe980da4390352b99e88a19a0ad&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 3, category: 'cozinha', title: 'Electrolux, Pote Hermetico, 12 unidades', price: '95,83', image: 'https://m.media-amazon.com/images/I/51uccv-jBiL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Kit-Potes-Herm%C3%A9ticos-Pl%C3%A1stico-Electrolux/dp/B09XJL4B9H?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=1dd87112850b8b2bf6da388359a5ba72&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 4, category: 'cozinha', title: 'Liquidificador Mondial, Turbo Power 550W', price: '94,91', image: 'https://m.media-amazon.com/images/I/71KFAoTV+hL._AC_SY879_.jpg', url: 'https://www.amazon.com.br/Liquidificador-Mondial-L-99-LB-220V/dp/B07QK91PTZ?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=1d30c9c7a22053e5ca21aa8373bf6f75&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 5, category: 'cozinha', title: 'Agratto, 783, Chaleira Elétrica', price: '62,85', image: 'https://m.media-amazon.com/images/I/51CmxAPMOML._AC_SX679_.jpg', url: 'https://www.amazon.com.br/CHALEIRA-ELETRICA-AGRATTO-Agratto-783/dp/B075THG2KJ?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=a6308d25b418ac2a650f1daf0ded8ec4&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 6, category: 'cozinha', title: 'BLACK+DECKER Mixer, Misturador Multiuso', price: '47,90', image: 'https://m.media-amazon.com/images/I/51Zkm1ug2WL._AC_SX679_.jpg', url: 'https://m.media-amazon.com/images/I/51Zkm1ug2WL._AC_SX679_.jpg'},
  { id: 7, category: 'cozinha', title: 'Filtro/Refil Original de Água para Purificador Electrolux', price: '64,72', image: 'https://m.media-amazon.com/images/I/41E+DC4dxwL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Refil-Filtro-Electrolux-Purificadores-PE11B/dp/B07B9ZYR6B?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=e410c297b10dcdbab6367d6a8a821b4c&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 8, category: 'cozinha', title: 'Fritadeira Air Fryer Forno Oven 12L, Mondial', price: '559,56', image: 'https://m.media-amazon.com/images/I/51wwp25UBVL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Fritadeira-Fryer-Forno-Litros-Mondial/dp/B0BZJDLT6Z?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=e04eac139ad2c79c35ffce1edd19467a&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 9, category: 'cozinha', title: 'Liquidificador 1400 Full Oster Preto', price: '199,00', image: 'https://m.media-amazon.com/images/I/51N3Xi4JJML._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Liquidificador-1400-Full-Preto-Oster/dp/B08DFCF9HW?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=92ab972606831b54b88c827936892b31&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 10, category: 'cozinha', title: 'Fritadeira Sem Óleo Air Fryer 4L', price: '243,87', image: 'https://m.media-amazon.com/images/I/71zeBuMlz2L._AC_SY879_.jpg', url: 'https://www.amazon.com.br/Fritadeira-Fryer-Litros-AFN-40-BI-Mondial/dp/B093M9941C?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=f55630519c99abcb0fa49b41b1e5d0fb&language=pt_BR&ref_=as_li_ss_tl'},
  // Eletrodomésticos
  { id: 11, },
  { id: 12, category: 'eletrodomesticos', title: 'Frigobar Philco', price: '1.013,06', image: 'https://m.media-amazon.com/images/I/31TfOR16AjL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Frigobar-Philco-PFG85P-N%C3%ADveis-Temperatura/dp/B0BTQ2K81C?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=d76b94c176f9af9025a3999a008890f6&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 13, category: 'eletrodomesticos', title: 'Robô Aspirador de Pó Inteligente', price: '1299,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Robô+Aspirador', url: 'https://www.amazon.com.br/dp/B091G2Y45P' },
  { id: 14, category: 'eletrodomesticos', title: 'Cafeteira Expresso Automática', price: '899,00', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Cafeteira', url: 'https://www.amazon.com.br/dp/B083Q6F15D' },
  // Games
  { id: 21, category: 'games', title: 'Controle sem Fio para Playstation 5', price: '429,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Controle+PS5', url: 'https://www.amazon.com.br/dp/B088G2Y45P' },
  { id: 22, category: 'games', title: 'Headset Gamer com Som Surround 7.1', price: '349,90', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Headset', url: 'https://www.amazon.com.br/dp/B07X2Y44D3' },
  { id: 23, category: 'games', title: 'Mouse Gamer Óptico 16000 DPI', price: '289,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Mouse+Gamer', url: 'https://www.amazon.com.br/dp/B09C2Y41L6' },
  // Jardim
  { id: 31, category: 'jardim', title: 'Kit de Ferramentas para Jardinagem 10 Peças', price: '119,90', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Ferramentas', url: 'https://www.amazon.com.br/dp/B07YF3434K' },
  { id: 32, category: 'jardim', title: 'Mangueira de Jardim Expansível 30m', price: '89,90', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Mangueira', url: 'https://www.amazon.com.br/dp/B08J7R8B2Q' },
  // Eletrônicos
  { id: 41, category: 'eletronicos', title: 'Fire TV Stick HD', price: '318,25', image: 'https://m.media-amazon.com/images/I/61K7fAOac9L._AC_SX679_.jpg', url: 'https://www.amazon.com.br/fire-tv-stick-hd/dp/B0CQMT33WX?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=62461b46b56a72702a706bc580f100a5&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 42, category: 'eletronicos', title: 'PHILIPS, Fone de Ouvido com Microfone', price: '22,22', image: 'https://m.media-amazon.com/images/I/51+W7A115SL._AC_SX679_.jpg', url:'https://www.amazon.com.br/PHILIPS-Microfone-TAUE101BK-00-intra-auricular/dp/B084S6BCJN?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=e7b98e965e0b5655a1f06e067a96861f&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 43, category: 'eletronicos', title: 'Echo Pop (Geração mais recente)', price: '348,99', image: 'https://m.media-amazon.com/images/I/8120tVg3AcL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Echo-Pop-Cor-Preta/dp/B09WXVH7WK?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=3e7144482d405110f19fdf4fc51b1f94&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 44, category: 'eletronicos', title: 'Fone de Ouvido Philips com Microfone', price: '22,41', image: 'https://m.media-amazon.com/images/I/51xo8ufuc5L._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Fones-Ouvido-Philips-com-Microfone/dp/B084S6N81P?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=cfcd5a18678744bbc1dc97817e74e88a&language=pt_BR&ref_=as_li_ss_tl'},
];

const categoryTitles = {
  home: 'Página Principal',
  cozinha: 'Os Melhores Produtos para a Sua Cozinha',
  eletrodomesticos: 'Eletrodomésticos em Promoção',
  eletronicos: 'Os Melhores Aparelhos do Momento',
  games: 'Promoções para Gamers',
  jardim: 'Tudo para o seu Jardim',
  quemsomos: 'Sobre Nós'
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('home');

  const renderContent = () => {
    if (selectedCategory === 'home') {
      return <HomePage onCategoryChange={setSelectedCategory} products={allProducts} />;
    }
    if (selectedCategory === 'quemsomos') {
      return <AboutUs />;
    }

    const filteredProducts = allProducts.filter(
      (product) => product.category === selectedCategory
    );

    return (
      <>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
          {categoryTitles[selectedCategory]}
        </Typography>
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            product.id && (
              <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <ProductCard product={product} />
              </Grid>
            )
          ))}
        </Grid>
      </>
    );
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <Container sx={{ py: 4 }}>
        {renderContent()}
      </Container>
    </Box>
  );
}

export default App;