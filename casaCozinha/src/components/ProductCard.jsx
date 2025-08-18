import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({ product }) {
  const affiliateTag = 'seu-id-afiliado-20';
  const productUrl = `${product.url}&tag=${affiliateTag}`;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: 'contain', p: 1 }}
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          gutterBottom 
          variant="body1" 
          component="div" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'text.primary',
            // Garante que a área do título tenha sempre a altura de 2 linhas
            height: '3.2em', 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.title}
        </Typography>
        <Box>
            <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                R$ {product.price}
            </Typography>
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<ShoppingCartIcon />}
        >
          Ver na Amazon
        </Button>
      </Box>
    </Card>
  );
}

export default ProductCard;