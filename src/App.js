import Footer from './components/Footer/Footer';
import Heder from './components/Heder/Heder';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Heder />
        <Content />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
