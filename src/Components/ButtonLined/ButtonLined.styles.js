import styled from "styled-components";
import Colors from "../../variables/Colors";


export const Button = styled.button`
    background-color:   transparent;
    padding:            10px 15px;
    width:              100%;
    border:             1px solid ${Colors.darkGrey};
    border-radius:      5px;
    cursor:             pointer;
    color:              ${Colors.darkGrey};

    &:hover {
        background:     ${Colors.darkGrey};
        /* border:         1px solid ${Colors.orange}; */
        color:          ${Colors.orange};
        font-weight:    bold;
        transition:     .5s ease-out;
    }
`;