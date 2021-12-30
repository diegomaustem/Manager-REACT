import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Container from './components/layout/Container';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';

function App() {
  return (
   <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/company">Contato</Link>
            <Link to="/contact">Empresa</Link>
            <Link to="/newproject">Novo Projeto</Link>
        </div>
        <Container customClass="min-height">
          <Routes>
                <Route exact path="/" element={<Home />} > </Route>
                <Route exact path="/company" element={<Company />} > </Route>
                <Route exact path="/contact" element={<Contact />} > </Route>
                <Route exact path="/newproject" element={<NewProject />} > </Route>
          </Routes>
        </Container>
        <p>Footer</p>
   </Router>
  );
}

export default App;
