import Arianne from './assets/Projets/Real/Ariane/Format de fichier image AV1.avif'
import Yeux_Mouille from './assets/Projets/Real/Yeux mouillées/Format de fichier image AV1.avif'
import Nuages_Noirs from './assets/Projets/Real/Nuages noirs/Format de fichier image AV1.avif'
import Cigale from './assets/Projets/Chef_op/Teaser la Cigale/Format de fichier image AV1.avif'
import Shoot_Bre from './assets/Projets/Photographe/Bre Emma/Format de fichier image AV1.avif'
import SmoothHeader from './smoothHeader'

const pages = [
  {
    path: Arianne,
    alt: "Arianne"
  },
  {
    path: Yeux_Mouille,
    alt: "Yeux_Mouille"
  },
  {
    path: Nuages_Noirs,
    alt: "Nuages_Noirs"
  },
  {
    path: Cigale,
    alt: "Cigale"
  },
  {
    path: Shoot_Bre,
    alt: "Shoot_Bre"
  },
];

function mainImg(props) {
  const { path, alt } = props

  return (
    <div className="w-screen">
      <img className="size-fit object-cover object-center" src={path} alt={alt} />
    </div>
    );
}

function myHeader() {
  return (
    <div className='fixed w-full p-8 flex justify-end gap-x-8'
    // style={{border: '1px solid red'}}
    >
      <p className='text-white text-2xl'>Contact</p>
      <p className='text-white text-2xl'>About</p>
    </div>
  );
}

function App() {
  return (
    <div className="w-screen scroll-smooth">
      <SmoothHeader />
      { myHeader() }
      { pages.map(p => {
        return mainImg(p);
      }) }
    </div>
  );
}

export default App;
