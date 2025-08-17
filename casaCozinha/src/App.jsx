import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AboutUs from './components/AboutUs';

const allProducts = [
  // Cozinha
  { id: 1, category: 'cozinha', title: 'Filtro/Refil de Água Acqua Pure para Purificador Electrolux', price: '75,60', image: 'https://m.media-amazon.com/images/I/31jHHrsOqyL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Filtro-Refil-Acqua-Purificador-Electrolux/dp/B09BK73232?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=51fd4d3e054d290afab3e40f03ab558d&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 2, category: 'cozinha', title: 'Sanduicheira Elétrica Cadence Click', price: '113,05', image: 'https://m.media-amazon.com/images/I/51UxR8FHe-L._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-127V/dp/B0CDJ4L7CZ?psc=1&linkCode=ll1&tag=casaecozinha13-20&linkId=1cbfdfe980da4390352b99e88a19a0ad&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 3, category: 'cozinha', title: 'Electrolux, Pote Hermetico, 12 unidades', price: '95,83', image: 'https://m.media-amazon.com/images/I/51uccv-jBiL._AC_SX679_.jpg', url: 'https://www.amazon.com.br/Kit-Potes-Herm%C3%A9ticos-Pl%C3%A1stico-Electrolux/dp/B09XJL4B9H?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=1dd87112850b8b2bf6da388359a5ba72&language=pt_BR&ref_=as_li_ss_tl' },
  { id: 4, category: 'cozinha', title: 'Liquidificador Mondial, Turbo Power 550W', price: '94,91', image: 'https://m.media-amazon.com/images/I/71KFAoTV+hL._AC_SY879_.jpg', url: 'https://www.amazon.com.br/Liquidificador-Mondial-L-99-LB-220V/dp/B07QK91PTZ?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=1d30c9c7a22053e5ca21aa8373bf6f75&language=pt_BR&ref_=as_li_ss_tl'},
  { id: 5, category: 'cozinha', title: 'Agratto, 783, Chaleira Elétrica', price: '62,85', image: 'https://m.media-amazon.com/images/I/51CmxAPMOML._AC_SX679_.jpg', url: 'https://www.amazon.com.br/CHALEIRA-ELETRICA-AGRATTO-Agratto-783/dp/B075THG2KJ?th=1&linkCode=ll1&tag=casaecozinha13-20&linkId=a6308d25b418ac2a650f1daf0ded8ec4&language=pt_BR&ref_=as_li_ss_tl'},
  // Eletrodomésticos
  { id: 11, category: 'eletrodomesticos', title: 'Fritadeira Elétrica sem Óleo (Air Fryer) 4L', price: '399,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Air+Fryer', url: 'https://www.amazon.com.br/dp/B08J7R8B2Q' },
  { id: 12, category: 'eletrodomesticos', title: 'Liquidificador Turbo com 12 Velocidades', price: '189,90', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Liquidificador', url: 'https://www.amazon.com.br/dp/B07X2Y44D3' },
  { id: 13, category: 'eletrodomesticos', title: 'Robô Aspirador de Pó Inteligente', price: '1299,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Robô+Aspirador', url: 'https://www.amazon.com.br/dp/B091G2Y45P' },
  { id: 14, category: 'eletrodomesticos', title: 'Cafeteira Expresso Automática', price: '899,00', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Cafeteira', url: 'https://www.amazon.com.br/dp/B083Q6F15D' },
  // Games
  { id: 21, category: 'games', title: 'Controle sem Fio para Playstation 5', price: '429,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Controle+PS5', url: 'https://www.amazon.com.br/dp/B088G2Y45P' },
  { id: 22, category: 'games', title: 'Headset Gamer com Som Surround 7.1', price: '349,90', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Headset', url: 'https://www.amazon.com.br/dp/B07X2Y44D3' },
  { id: 23, category: 'games', title: 'Mouse Gamer Óptico 16000 DPI', price: '289,00', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Mouse+Gamer', url: 'https://www.amazon.com.br/dp/B09C2Y41L6' },
  // Jardim
  { id: 31, category: 'jardim', title: 'Kit de Ferramentas para Jardinagem 10 Peças', price: '119,90', image: 'https://placehold.co/300x300/D95D39/FFFFFF?text=Ferramentas', url: 'https://www.amazon.com.br/dp/B07YF3434K' },
  { id: 32, category: 'jardim', title: 'Mangueira de Jardim Expansível 30m', price: '89,90', image: 'https://placehold.co/300x300/6A7B33/FFFFFF?text=Mangueira', url: 'https://www.amazon.com.br/dp/B08J7R8B2Q' },
];

const categoryTitles = {
  cozinha: 'Ofertas para a sua Cozinha',
  eletrodomesticos: 'Eletrodomésticos em Promoção',
  games: 'Promoções para Gamers',
  jardim: 'Tudo para o seu Jardim',
  quemsomos: 'Sobre Nós'
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('cozinha');

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <Container sx={{ py: 4 }}>
        {selectedCategory === 'quemsomos' ? (
          <AboutUs />
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
              {categoryTitles[selectedCategory]}
            </Typography>
            <Grid container spacing={4}>
              {filteredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;