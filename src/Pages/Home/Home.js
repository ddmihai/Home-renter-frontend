import { HeaderTextWrapper, HomeBanner, HomeBannerHeader, HomeBannerNavigate, HomeBannerSubtitle, HomeMainWrapper, PresentationWrapper } from "./Home.styles";
import homeBanner from '../../Images/homeBanner.jpg'

// Media querries
import { useMediaQuery } from 'react-responsive';
import PresentationCards from "../../Components/PresentationCards/PresentationCards";

// Icons
import { FaMoneyBillAlt, FaMobileAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';



const Home = () => {

  // Media querries 
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 700px)'});
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });



  return (
    <HomeMainWrapper>
      {/* Home banner */}
      <HomeBanner >
        <img src={homeBanner} alt='Home banner img'/>

        <HeaderTextWrapper isDesktopOrLaptop={isDesktopOrLaptop}>
          <HomeBannerHeader>Wellcome to Home renter</HomeBannerHeader>
          <HomeBannerSubtitle>
            Add your rent space here. Upload images, browse existing houses, and look for the best deal for free!
          </HomeBannerSubtitle>
          <HomeBannerNavigate isTabletOrMobile={isTabletOrMobile}>Explore more</HomeBannerNavigate>
        </HeaderTextWrapper>
      </HomeBanner>



    {/* Cards components */}
    <PresentationWrapper>
      <PresentationCards 
        title='Free and reliable' 
        subtitle='Search and upload renting space for free' 
        icon={<FaMoneyBillAlt size={40} />} />

      <PresentationCards 
        title='Simple interface' 
        subtitle='Easy to use from mobile and desktop' 
        icon={<FaMobileAlt size={40} />} />
      
      <PresentationCards 
        title='Continous improvements' 
        subtitle='We constantly improve and add new services' 
        icon={<FiSettings size={40} />} />
    </PresentationWrapper>


    </HomeMainWrapper>
  );
};



export default Home;