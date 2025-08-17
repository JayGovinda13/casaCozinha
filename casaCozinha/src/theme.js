import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A7B33', // Verde do logo (cor principal agora)
    },
    secondary: {
      main: '#D95D39', // Terracota do logo (cor secundária)
    },
    background: {
      default: '#F7F5E6', // Creme do fundo do logo
    },
    text: {
      primary: '#232F3E', // Um cinza escuro para o texto principal
      secondary: '#6A7B33', // Verde para textos secundários e títulos
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;