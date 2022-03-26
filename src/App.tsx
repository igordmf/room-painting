import { GlobalStyle } from './styles/global.styles';
import AppProvider from './context';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { AppStyles, BgStyles } from './styles/App';


function App() {
  return (
    <AppProvider>
      <div className="App" style={AppStyles}>
        <Header />

        <Home />
      </div>
  
      <div title='bg-image' style={BgStyles}/>

      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
