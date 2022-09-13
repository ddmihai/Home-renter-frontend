import styled from "styled-components";
import Colors from "../../variables/Colors";


export const MainWrapper = styled.main`
    margin:             0 auto;
    max-width:          700px;
`;

export const CreatedHousesHeader = styled.h1`
    font-weight:        300;
    color:              ${Colors.darkGrey};
    padding:            0px 20px;
`;

export const CreatedHousesSubtitle = styled.h4`
    margin:             10px;
    padding:            10px 20px;
    font-weight:        300;
    color:              ${Colors.orange};
    background:         ${Colors.darkGrey};
    border-left:        6px solid ${Colors.orange};
`;

export const HouseWrapper = styled.section`
    background-color:   whitesmoke;
    border-radius:      7px;
    margin:             10px;  
`;

export const HouseImgAndInfo = styled.div`
    display:            flex;
`;


// This is the div that contains the house details
export const HouseDetailsInfo = styled.div`
    display:            flex;
    flex-direction:     column;
    justify-content:    space-around;
    max-width: inherit;

    & p {
        margin:         0;
        padding:        5px 10px 5px 5px;

        width:          ${props => props.isMobile ? "190px" : "inherit"};
        white-space:    nowrap;
        overflow:       hidden;
        text-overflow:  ellipsis;
    }
`;

// Price of the house span elements
export const HousePriceEl = styled.span`
    color:              darkgray;
    font-style:         italic;
`;

export const HousePriceNr = styled.span`
    color:              ${Colors.darkGrey};
    font-size:          1.1em;
    font-weight:        bold;
`;

export const HouseTenancy = styled.span`
    color:              ${Colors.darkGrey};
    font-size:          1.1em;
    font-style:         italic;
`;

export const IconWrapper = styled.div`
    display:            flex;
    justify-content:    space-evenly;
    padding:            5px 10px;
    max-width:          140px;
    margin-left:        auto;
`;


export const HouseTitle = styled.p`
    font-size:          22px;
    color:              ${Colors.darkGrey};
    font-style:         italic;
`;

export const HouseStreet = styled.p`
    color:              ${Colors.darkGrey};
`;


// Add new house wrapper
export const AddNewHouseWrapper = styled.div`
    margin: 10px;
`;


