import React from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function AboutUs() {
  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#fff' }}>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <InfoIcon />
        </Avatar>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
          Nossa Missão
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ maxWidth: '800px', lineHeight: 1.7 }}>
          Bem-vindo ao <strong>Casa e Cozinha Ofertas</strong>! Nós somos apaixonados por encontrar os melhores produtos e as promoções mais incríveis para o seu lar. A nossa missão é simples: organizar num só lugar as melhores ofertas da Amazon para as categorias de casa, cozinha, jardim e muito mais.
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ maxWidth: '800px', mt: 2, lineHeight: 1.7 }}>
          Navegamos diariamente pela imensidão de produtos da Amazon para selecionar e trazer até si apenas os itens com as melhores avaliações e os preços mais vantajosos. Queremos que poupe tempo e dinheiro, fazendo escolhas inteligentes e deixando a sua casa ainda mais aconchegante.
        </Typography>
      </Box>
    </Paper>
  );
}

export default AboutUs;