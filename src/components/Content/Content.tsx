import '../../styles/style.css';
import Home from './Home/Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import Work from './Work/Work';


const Content = () => {
  return (
    <main className="content">
      <Home/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
    </main>
  )
}

export default Content