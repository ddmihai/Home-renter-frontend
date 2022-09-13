import styled from "styled-components";
import Colors from "../../variables/Colors";


export const CarrouselWrapper = styled.section`
    flex:           1 1 300px;
    padding:        6px;
    max-width:      500px;
    height:         300px;
    border-radius:  10px;

    & > div {
        height:     100%;
    }
`;


export const MainHouseInfo = styled.main`
    padding:        10px;
    margin:         0 auto;
    max-width:      1000px;
`;

export const ImageAndHouseInfo = styled.section`
    border-radius:  10px;
    background:     whitesmoke;
    display:        flex;
    flex-wrap:      wrap;
`;

export const HouseDescription = styled.p`
    padding:        15px;
    background:     whitesmoke;
    border-radius:  10px;
    color:          ${Colors.darkGrey};
`;


export const HouseTimeCreated = styled.p`
    font-style:     italic;
    color:          darkgray;
    
`;
