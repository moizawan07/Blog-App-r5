import HeroSection from '../../components/heroSection/HeroSection';
import Section1 from '../../components/section1/Section1';
import Section2 from '../../components/section2/Section2';
import Section3 from '../../components/section3/Section3';
import Section4 from '../../components/section4/Section4';
import SingleLine from '../../components/singleLine/SigleLine';


//  JO JO COMPONENTS USE HORHA HOME PAGE WO YHN STORED KRA LIYA


function Home() {
    return (
        <>
            <HeroSection />                            {/* HeroSection Component */}

            <Section1
                mainClass='section2-container'
                leftClass='s2left-con'
                rightClass='s2right-con'
            />                                          {/* Section1 Component */}

            <SingleLine
                heading='Our Reacent Post'
            />                                          {/* SingleLine Component */}
                        
            <Section2 />                                {/* Section2 Component */}
                        
            <Section3 />                                {/* Section3 Component */}

            <Section4 />                                {/* Section4 Component */}

        </>
    )
}
export default Home;