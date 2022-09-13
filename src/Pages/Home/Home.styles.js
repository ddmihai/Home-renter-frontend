import styled from "styled-components";
import Colors from '../../variables/Colors.js'


// main home wrapper
export const HomeMainWrapper = styled.main`
    margin: 0 auto;
`;

// Main banner component
export const HomeBanner = styled.section`
    max-width:      1000px !important;
    margin:         0 auto;
    height:         auto;
    background:     rgba(0, 0, 0, 0.6);
    position:       relative;
    display:        flex;

    & img {
        max-width:  100%;
        height:     inherit;
        object-fit: cover;
        position:   relative;
        z-index:    -1;
    }
    
`;


export const HomeBannerHeader = styled.h1`
    color:          ${Colors.orange};
    font-weight:    bold;
    font-size:      1.7em;
    display:        flex;
    margin-bottom:  30px;
    justify-content: center;
`;


export const HomeBannerSubtitle = styled.section`
    color:              ${Colors.orange};
    font-weight:        bold;
`;


export const HomeBannerNavigate = styled.button`
    color:              ${Colors.orange};
    background:         ${Colors.darkGrey};
    border:             1px solid ${Colors.orange};
    padding:            7px 25px;
    border-radius:      5px;
    max-width:          150px;
    margin:             ${props => props.isTabletOrMobile ? '30px auto' : '100px auto'};
`;

export const HeaderTextWrapper = styled.section`
    position:       absolute;
    z-index:        1;
    top:            ${props => props.isDesktopOrLaptop ? '30%' : '7%'};
    
    display:        flex;
    flex-direction: column;
    flex:           1 1 300px;
    width:          100%;
    text-align:     center;
`;



// PRESENTATION WRAPPER SECTION
export const PresentationWrapper = styled.section`
    background:         whitesmoke;
    display:            flex;
    gap:                20px;
    padding:            40px 10px;
    flex-wrap:          wrap;
    justify-content:    center;
`;