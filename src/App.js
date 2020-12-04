import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      	<ThemeProvider theme={ theme }>
          <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/faq">
                <FAQ />
              </Route>
            </Switch>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
