import styled from "styled-components";
import Colors from "../../variables/Colors";


export const FormDocumentWrapper    = styled.form`
    border:         2px solid red;
    margin-top:     20px;
    background:     whitesmoke;
    border:         1px solid ${Colors.darkGrey};
    border-radius:  7px;
    padding:        10px 20px;
`;

export const FromDocumentTitle      = styled.h1`
    font-weight:    300;
    color:          ${Colors.darkGrey};
`;


export const FromDocumentSubTitle      = styled.h3``;

export const FromDocumentDescription      = styled.p`
    background:     ${Colors.darkGrey};
    color:          white;
    border-left:    6px solid ${Colors.orange};
    padding:        10px 20px;
    border-top-right-radius:        6px;
    border-bottom-right-radius:     6px;
`;


export const FormDocumentInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

