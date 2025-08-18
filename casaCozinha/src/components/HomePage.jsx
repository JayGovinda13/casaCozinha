import React from 'react';
import { Grid, Typography, Box, Card, CardActionArea, CardContent, Divider } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BlenderIcon from '@mui/icons-material/Blender';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import YardIcon from '@mui/icons-material/Yard';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'; // Novo ícone
import ProductCard from './ProductCard';

const categoryCards = [
    { key: 'cozinha', title: 'Cozinha', description: 'Panelas, utensílios e tudo para suas receitas.', icon: <KitchenIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'eletrodomesticos', title: 'Eletrodomésticos', description: 'As melhores ofertas em air fryers, liquidificadores e mais.', icon: <BlenderIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'games', title: 'Games', description: 'Controles, headsets e acessórios para gamers.', icon: <SportsEsportsIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'eletronicos', title: 'Eletrônicos', description: 'Smartphones, TVs e acessórios em oferta.', icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'jardim', title: 'Jardim', description: 'Ferramentas e acessórios para cuidar do seu jardim.', icon: <YardIcon sx={{ fontSize: 40 }} color="primary" /> },
];

function HomePage({ onCategoryChange, products }) {
    // Seleciona alguns produtos de destaque de diferentes categorias
    const featuredProducts = [
        ...products.filter(p => p.category === 'cozinha').slice(0, 2),
        ...products.filter(p => p.category === 'eletrodomesticos').slice(0, 1),
        ...products.filter(p => p.category === 'eletronicos').slice(0, 1),
        ...products.filter(p => p.category === 'games').slice(0, 1),
        ...products.filter(p => p.category === 'jardim').slice(0, 1),
    ].filter(p => p.id); // Garante que não há produtos vazios

    return (
        <Box>
            <Box textAlign="center">
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', mt: 4 }}>
                    As Melhores Ofertas da Amazon
                </Typography>
                <Typography variant="h5" component="p" color="text.primary" sx={{ mb: 6 }}>
                    Navegue pelas categorias e encontre promoções incríveis para o seu lar.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {categoryCards.map((cat) => (
                        <Grid item key={cat.key} xs={12} sm={6} md={2.4}>
                            <Card sx={{ height: '100%', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' } }}>
                                <CardActionArea onClick={() => onCategoryChange(cat.key)} sx={{ p: 3, height: '100%' }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                        {cat.icon}
                                        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                                            {cat.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {cat.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ my: 6, borderColor: 'primary.main' }}>
                <Typography variant="h5" component="h2" sx={{ color: 'text.secondary' }}>
                    Ofertas em Destaque
                </Typography>
            </Divider>
            
            <Grid container spacing={4}>
              {featuredProducts.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
        </Box>
    );
}

export default HomePage;
