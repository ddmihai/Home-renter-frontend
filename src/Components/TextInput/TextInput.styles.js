import styled from "styled-components";
import Colors from "../../variables/Colors";


export const TextInputBox = styled.input`
    background:         transparent;
    border:             .5px solid ${Colors.darkGrey};
    padding:            10px 0px;
    border-radius:      5px;
    max-width:          100%;

    /* Text, email, password => set the type of text padding */
    &[type=text] {
        padding-left: 15px;
    }

    &[type=number] {
        padding-left: 15px;
    }

    &[type=password] {
        padding-left: 15px;
    }

    &[type=email] {
        padding-left: 15px;
    }

    &:focus {
        outline:        none !important;
        border:         .5px solid ${Colors.orange};
        transition:     .5s ease-out;
    }
`;