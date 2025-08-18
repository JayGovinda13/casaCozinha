import React, { useState, useEffect, useMemo } from 'react';
import { Grid, Typography, Box, Card, CardActionArea, CardContent, Divider, Fade } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BlenderIcon from '@mui/icons-material/Blender';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import YardIcon from '@mui/icons-material/Yard';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ProductCard from './ProductCard';

const categoryCards = [
    { key: 'cozinha', title: 'Cozinha', description: 'Panelas, utensílios e mais.', icon: <KitchenIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'eletrodomesticos', title: 'Eletrodomésticos', description: 'Air fryers, liquidificadores e mais.', icon: <BlenderIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'eletronicos', title: 'Eletrônicos', description: 'Smartphones, TVs e acessórios.', icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'games', title: 'Games', description: 'Controles, headsets e acessórios.', icon: <SportsEsportsIcon sx={{ fontSize: 40 }} color="primary" /> },
    { key: 'jardim', title: 'Jardim', description: 'Ferramentas e acessórios.', icon: <YardIcon sx={{ fontSize: 40 }} color="primary" /> },
];

function HomePage({ onCategoryChange, products }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(true); // Estado para controlar a animação

    // Filtra e memoriza a lista de produtos válidos para o carrossel
    const carouselProducts = useMemo(() => products.filter(p => p.id > 0 && p.id < 50), [products]);

    // Lógica do carrossel para avançar automaticamente com animação
    useEffect(() => {
        // Não inicia o carrossel se não houver produtos suficientes para girar
        if (carouselProducts.length <= 3) return;

        const timer = setInterval(() => {
            setShow(false); // Inicia o fade-out

            // Espera a animação de fade-out terminar para trocar os produtos
            setTimeout(() => {
                setCurrentIndex(prevIndex => {
                    const nextIndex = prevIndex + 3;
                    // Volta ao início se o próximo índice ultrapassar o tamanho do array
                    return nextIndex >= carouselProducts.length ? 0 : nextIndex;
                });
                setShow(true); // Inicia o fade-in com os novos produtos
            }, 500); // Duração da transição de fade-out

        }, 5000); // Intervalo de tempo para cada slide

        return () => clearInterval(timer); // Limpa o timer ao desmontar o componente
    }, [carouselProducts.length]);

    // Pega os 3 produtos para exibir na rodada atual do carrossel
    const featuredProducts = carouselProducts.slice(currentIndex, currentIndex + 3);

    return (
        <Box>
            <Box textAlign="center" sx={{ mb: 6 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold', mt: 4 }}>
                    As Melhores Ofertas da Amazon
                </Typography>
                <Typography variant="h5" component="p" color="text.primary" sx={{ mb: 4 }}>
                    Navegue pelas categorias e encontre promoções incríveis.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {categoryCards.map((cat) => (
                        <Grid item key={cat.key} xs={12} sm={6} md={2.4} sx={{ display: 'flex' }}>
                            <Card sx={{ width: '100%', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' } }}>
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

            <Divider sx={{ my: 4, borderColor: 'primary.main' }}>
                <Typography variant="h5" component="h2" sx={{ color: 'text.secondary' }}>
                    Ofertas em Destaque
                </Typography>
            </Divider>
            
            <Fade in={show} timeout={500}>
                <Grid container spacing={4}>
                  {featuredProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
            </Fade>
        </Box>
    );
}

export default HomePage;