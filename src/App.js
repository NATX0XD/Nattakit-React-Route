import NavbarIndex from './components/Navbar';
import FooterIndex from './components/Footer';
import ProfileData from './configurations/data/ProfileData';
import NavItems from './configurations/NavItems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';


function App() {
  const { name } = ProfileData;
  return (
    <div className="App">

      <BrowserRouter>
        <NavbarIndex name={name} />
        <main>
          <Routes>
            {NavItems.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <FooterIndex name={name} />
      </BrowserRouter>
    </div>
  );
}

export default App;
