import React from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';

function Header({ selectedCategory, onCategoryChange }) {

  const handleChange = (event, newValue) => {
    onCategoryChange(newValue);
  };

  return (
    // O AppBar agora usa a cor de fundo do tema e tem uma borda inferior
    <AppBar position="static" sx={{ backgroundColor: 'background.default', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <img src="/logo.png" alt="Logo Casa e Cozinha" style={{ height: '40px', marginRight: '16px' }} />
        <Box display={{ xs: 'none', sm: 'flex' }} alignItems="baseline">
          <Typography variant="h6" component="div" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
            CASA
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: 'secondary.main', ml: 1, fontWeight: 'normal', mr: 4 }}>
            E COZINHA
          </Typography>
        </Box>
        <Tabs
          value={selectedCategory}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="abas de categorias"
          sx={{ flexGrow: 1 }}
        >
          <Tab value="cozinha" label="Cozinha" sx={{ color: 'text.primary' }} />
          <Tab value="eletrodomesticos" label="Eletrodomésticos" sx={{ color: 'text.primary' }} />
          <Tab value="games" label="Games" sx={{ color: 'text.primary' }} />
          <Tab value="jardim" label="Jardim" sx={{ color: 'text.primary' }} />
          <Tab value="quemsomos" label="Quem Somos" sx={{ color: 'text.primary' }} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
