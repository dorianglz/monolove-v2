import About_picture from '../assets/LOGOS/Simon_about.avif';
import Header from '../Header';


const Contact = () => {
    return (
      <>
        <Header />
        <div className="w-screen h-full sm:h-screen p-8 flex flex-col sm:flex-row gap-8 sm:items-center justify-center text-black font-arial text-[15px]/4">
          <p className='order-3 sm:order-1 sm:w-1/3'>
            Simon Vitkovsky (aka Monolove) is a director and photographer based in Paris. Trained in film school, he develops a universe where the image becomes an emotion, a story, and a carefully crafted aesthetic.<br></br><br></br>
            Passionate about light, textures, and composition, Simon aims to capture moments where the image speaks for itself, where every detail evokes a specific feeling. He explores the balance between the real and the dreamlike, playing with colors, contrasts, and staging to convey strong emotions.<br></br><br></br>
            Although he often works in collaboration with creative teams, Simon also enjoys taking on multiple roles in his projects, such as director, director of photography, editor, and colorist, when he feels it is necessary. This approach allows him to ensure aesthetic coherence and full control over his creative vision on certain projects.<br></br><br></br>
            Through his collaborations with brands and artists, he shapes a unique visual identity, always in pursuit of the perfect balance between technique and sensitivity.
          </p>
          <img className='order-1 mt-[40px] sm:order-2 sm:w-1/2 h-auto' src={About_picture} alt="About" />
          <div className='order-2 sm:order-3 grid sm:justify-items-end'>
            <p className='hover:underline'>Instagram</p>
            <p className='hover:underline'>team@monolove.fr</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;