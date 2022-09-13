import styled from "styled-components";
import Colors from "../../variables/Colors";

export const MainImgWrapper = styled.main`
    margin:         30px auto;
    padding:        10px;
    max-width:      600px;
`;


export const MainHeaderTitle = styled.h1`
    font-weight:    400;
    color:          ${Colors.darkGrey};
`;

export const MainHeaderSubTitle = styled.h3`
    font-weight:    400;
    color:          ${Colors.darkGrey};
`;

export const InputFileWrapper = styled.input`
    background:     transparent;
    margin-bottom:  10px;
`;

export const FormButtonWrapper = styled.div`
    height:         85px;
    display:        flex;
    flex-direction: column;
    justify-content: space-evenly;
`;