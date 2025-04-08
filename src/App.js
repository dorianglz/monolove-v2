import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arianne from './assets/Projets/Real/Ariane/arianne.avif';
import Yeux_Mouille from './assets/Projets/Real/Yeux mouillées/Format de fichier image AV1.avif';
import Nuages_Noirs from './assets/Projets/Real/Nuages noirs/Format de fichier image AV1.avif';
import Cigale from './assets/Projets/Chef_op/Teaser la Cigale/Format de fichier image AV1.avif';
import Shoot_Bre from './assets/Projets/Photographe/Bre Emma/Format de fichier image AV1.avif';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Header from './Header';

const pages = [
  { path: Arianne, alt: "Arianne", role: ["director", "DOP", "editor", "colorist"] },
  { path: Yeux_Mouille, alt: "Yeux_Mouille", role: ["director", "DOP", "editor", "colorist"] },
  { path: Nuages_Noirs, alt: "Nuages_Noirs", role: ["director", "DOP", "editor", "colorist"] },
  { path: Cigale, alt: "Cigale", role: ["director", "DOP", "editor", "colorist"] },
  { path: Shoot_Bre, alt: "Shoot_Bre", role: ["director", "DOP", "editor", "colorist"] },
];

function MainImg({ path, alt }) {
  return (
    <div className="h-screen w-screen snap-start shrink-0 overflow-hidden">
      <img
        className="h-full w-full object-cover object-center"
        src={path}
        alt={alt}
        draggable={false}
      />
    </div>
  );
}
function Home() {
  return (
    <>
      <Header />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {pages.map((p, i) => (
          <MainImg key={i} path={p.path} alt={p.alt} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;