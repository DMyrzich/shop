import Footer from './components/Footer/Footer';
import Heder from './components/Heder/Heder';
import NotFound from './components/Page/NotFound';
import Contact from './components/Page/Contact';
import About from './components/Page/About';
import Content from './components/Content/Content';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Api } from './Api/Api'
import CardInfo from './components/CardInfo/CardInfo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Heder />
        <Api>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/details/:id" component={CardInfo} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Api>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
