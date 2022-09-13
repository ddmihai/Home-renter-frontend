import styled from "styled-components";
import Colors from "../../variables/Colors";

// Main wrapper main
export const LoginWrpper = styled.main`
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Form wrapper
export const FormWraper = styled.form`
    flex:               1 1 300px;
    max-width:          600px;
    padding:            25px 15px 50px 15px;
    background:         whitesmoke;
    margin:             10px;
    border-radius:      5px;
`;

export const TitleLogin = styled.h1`
    color:              ${Colors.darkGrey};
    margin-top:         0px;
`;


export const SubtitleLogin = styled.h3`
    color:              ${Colors.darkGrey};
`;

export const InputWrapper = styled.section`
    height:             90px;
    display:            flex;
    flex-direction:     column;
    justify-content:    space-evenly;
`;

export const ButtonWrapper = styled.section`
    margin-top: 15px;
`;