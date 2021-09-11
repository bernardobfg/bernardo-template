import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Provider from './contexts/';

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <Provider>
        <Routes/>     
      </Provider>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
