import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Box, Tabs, Tab, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const categories = [
  { key: 'cozinha', label: 'Cozinha' },
  { key: 'eletrodomesticos', label: 'Eletrodomésticos' },
  { key: 'games', label: 'Games' },
  { key: 'jardim', label: 'Jardim' },
  { key: 'quemsomos', label: 'Quem Somos' },
];

function Header({ selectedCategory, onCategoryChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  // 'md' é o breakpoint para tablets. Abaixo disso, será considerado móvel.
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCategoryClick = (categoryKey) => {
    onCategoryChange(categoryKey);
    setDrawerOpen(false); // Fecha o menu ao selecionar um item
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
        Categorias
      </Typography>
      <List>
        {categories.map((cat) => (
          <ListItem key={cat.key} disablePadding>
            <ListItemButton onClick={() => handleCategoryClick(cat.key)}>
              <ListItemText primary={cat.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'background.default', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <Toolbar>
          <img src="/logo.png" alt="Logo Casa e Cozinha" style={{ height: '40px', marginRight: '16px' }} />
          <Box display={{ xs: 'none', sm: 'flex' }} alignItems="baseline" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
              CASA
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: 'secondary.main', ml: 1, fontWeight: 'normal' }}>
              E COZINHA
            </Typography>
          </Box>
          
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Tabs
              value={selectedCategory}
              onChange={(e, newValue) => onCategoryChange(newValue)}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="abas de categorias"
            >
              {categories.map((cat) => (
                 <Tab key={cat.key} value={cat.key} label={cat.label} sx={{ color: 'text.primary' }} />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhor performance de abertura em mobile.
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default Header;