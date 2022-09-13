import styled from "styled-components";


export const HouseHolder = styled.main`
    margin:             15px;
`;

export const HouseMainWrapper = styled.section`
    max-width:          650px;
    background-color:   whitesmoke;
    margin:             20px auto;
    border-radius:      10px;
`;

export const HouseContainer = styled.section`
    display:            flex;
    flex-wrap:          wrap;
`;

export const HouseImageStyle = styled.img`
    flex:               1 1 200px;
    height:             inherit;
    width:              100%;
    border-top-left-radius: 10px;

    /* max styling */
    max-width:          400px;
    max-height:         inherit;
`;


export const HouseAddressHolder = styled.address`
    max-height:         200px !important;
    padding-left:       10px;
    padding-top:        0px;

    & p:first-child {
        font-size:      1.5em;
    }
`;

export const HouseButton = styled.button`
    background:         transparent;
    border:             none;
    padding:            0px;
    font-weight:        bolder;
    font-style:         italic;
    border-bottom:      2px solid #333;
    margin-bottom:      20px;
`;