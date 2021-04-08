import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import ProductDetails from './components/pages/ProductDetails';
function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={Home} exact></Route>
    <Route path="/product/:id" component={ProductDetails}></Route>
    </BrowserRouter>
  );
}

export default App;
