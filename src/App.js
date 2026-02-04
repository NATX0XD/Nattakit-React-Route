import NavbarIndex from './components/Navbar';
import FooterIndex from './components/Footer';
import Home from './pages/Home';
import ProfileData from './configurations/data/ProfileData';

function App() {
  // ดึงชื่อจาก ProfileData เพื่อส่ง props ไปยัง Navbar และ Footer
  const { name } = ProfileData;

  return (
    <div className="App">
      <NavbarIndex name={name} />

      <main>
        <Home />
      </main>

      <FooterIndex name={name} />
    </div>
  );
}

export default App;
