import './App.css'
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import SingleLine from './components/singleLine/SigleLine';

function App() {

  return (
    <>
        
      <Header />        {/* Header Component */}
      
      <HeroSection />   {/* HeroSection Component */}

      <Section2        
         mainClass='section2-container'
         leftClass='s2left-con'
         rightClass='s2right-con'
      />      {/* Section2 Component */}

      <SingleLine heading='Our Reacent Post'/>    {/* Section2 Component */}

      <Section3 />      {/* Section3 Component */}
      
    </>
  )
}

export default App;
