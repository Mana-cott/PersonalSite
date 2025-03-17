import './Main.css';
import Contact from './Contact/Contact';
import Software from './Software/Software';
import Projects from './Projects/Projects';
import Gallery from './Gallery/Gallery';

function Main({ curr }) {

  function renderCurr(){
    switch(curr){
      case 'contact':
        return <Contact/>
      case 'software':
        return <Software/>
      case 'projects':
        return <Projects/>
      case 'gallery':
        return <Gallery/>
      default :
        return <></>
    }
  }

  return (
    <main>
      {renderCurr(curr)}
    </main>
  );
}

export default Main;
