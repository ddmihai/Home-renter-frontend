import { HeaderWrapper, MobileMenuHolder, LogoHolder } from "./Header.styles";
import Colors from "../../variables/Colors";

// Icon
import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive'
import HeaderLinksDesktop from "./HeaderLinksDesktop";
import { useState } from "react";
import HeaderLinksMobile from "./HeaderLinksWrapperMobile";



const Header = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 850px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 850px)' });
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenHeader = () => setIsOpen(!isOpen);

  return (
    <HeaderWrapper isMobile isBigScreen>    
        <LogoHolder>
            <RiMoneyPoundCircleLine size={30} color={Colors.orange}/>
        </LogoHolder>

        {/* Links screens for Desktop and mobile */}
        { isBigScreen && <HeaderLinksDesktop /> }
        { (isMobile && isOpen) && <HeaderLinksMobile closeHeader={handleOpenHeader} />}

        {isMobile && <MobileMenuHolder>
            <HiMenuAlt3 size={30} onClick={handleOpenHeader} color={Colors.orange}/>
        </MobileMenuHolder>}
    </HeaderWrapper>
  )
}

export default Header