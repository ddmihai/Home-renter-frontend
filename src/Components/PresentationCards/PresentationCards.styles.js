import styled from "styled-components";
import Colors from "../../variables/Colors";

export const PresentationWrapper = styled.section`
    background-color:   ${Colors.darkGrey};
    flex:               1 1 300px;
    max-width:          400px;
    text-align:         center;
    border:             1px solid ${Colors.orange};
    padding:            30px 10px;

    & p:nth-child(1) {
        color:          ${Colors.orange};
        font-size:      1.2em !important;
        font-style:     italic;
        font-weight:    bold;
    }

    & p:nth-child(2) {
        color:          ${Colors.orange}
    }

    & p:nth-child(3) {
        color:          ${Colors.orange};
    }

`;