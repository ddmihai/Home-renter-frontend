import styled from "styled-components";
import Colors from "../../variables/Colors";

export const SignupWrapperStyled = styled.main`
    display:            flex;
    justify-content:    center;
    align-items:        center;
`;

export const SignupForm = styled.form`
    border:             .7px solid ${Colors.darkGrey};
    display:            flex;
    flex-direction:     column;
    flex:               1 1 400px;
    max-width:          600px;
    padding:            10px 10px 25px 10px;
    margin:             25px 10px;
    border-radius:      5px;
`;

export const SignupTitle = styled.h1`
    margin:             0;
    padding:            10px 0px 0px 10px;
    font-weight:        400;
`;
export const SignupSubTitle = styled.h3`
    background:         ${Colors.darkGrey};
    color:              ${Colors.orange};
    border-left:        5px solid ${Colors.orange};
    font-weight:        400;
    padding:            10px 20px;
    font-size:          1em;
`;
export const SignupInfo = styled.p`
    padding:            0px 0px 10px 10px;
`;

export const SignupInputWrapper = styled.section`
    display:            flex;
    flex-direction:     column;
    gap:                10px;
    margin-bottom:      25px;
`;
