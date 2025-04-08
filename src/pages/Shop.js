import Header from "../Header";
import Arianne from '../assets/Projets/Real/Ariane/arianne.avif';
import Yeux_Mouille from '../assets/Projets/Real/Yeux mouillées/Format de fichier image AV1.avif';
import Nuages_Noirs from '../assets/Projets/Real/Nuages noirs/Format de fichier image AV1.avif';
import Cigale from '../assets/Projets/Chef_op/Teaser la Cigale/Format de fichier image AV1.avif';
import Shoot_Bre from '../assets/Projets/Photographe/Bre Emma/Format de fichier image AV1.avif';

const shopImages = [
  { src: Arianne },
  { src: Yeux_Mouille },
  { src: Cigale },
  { src: Shoot_Bre },
  { src: Yeux_Mouille },
  { src: Cigale },
  { src: Shoot_Bre },
  { src: Yeux_Mouille },
  { src: Arianne },
  { src: Cigale },
  { src: Arianne },
  { src: Yeux_Mouille },
  { src: Cigale },
  { src: Shoot_Bre },
  { src: Yeux_Mouille },
  { src: Cigale },
  { src: Yeux_Mouille },
  { src: Cigale },
  { src: Shoot_Bre },
  { src: Nuages_Noirs },
];

function Shop() {
  const leftColImages = shopImages.filter((_, i) => i % 2 === 0);
  const rightColImages = shopImages.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Texte fixe centré à droite */}
      <div className="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 text-right text-black font-arial text-[15px]/4 z-40 pointer-events-none flex-col">
        <p className="mb-1 pointer-events-auto">Instagram</p>
        <p className="pointer-events-auto">team@monolove.fr</p>
      </div>

      {/* Contenu scrollable centré */}
      <div className="h-screen overflow-y-scroll scroll-smooth">
        <div className="max-w-5xl mx-auto px-12 sm:px-10 md:px-20 sm:py-20 flex flex-col sm:flex-row justify-center gap-10">
          {/* Colonne gauche avec décalage */}
          <div className="flex-1 flex flex-col gap-6 mt-20">
            {leftColImages.map((img, i) => (
              <div key={`left-${i}`} className="break-inside-avoid">
                <img
                  src={img.src}
                  alt={`Poster ${i + 1}`}
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Colonne droite légèrement décalée */}
          <div className="flex-1 flex flex-col gap-6 mt-4">
            {rightColImages.map((img, i) => (
              <div key={`right-${i}`} className="break-inside-avoid">
                <img
                  src={img.src}
                  alt={`Poster ${i + 1}`}
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;