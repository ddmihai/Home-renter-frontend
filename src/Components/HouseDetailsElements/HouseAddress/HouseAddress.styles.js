import styled from "styled-components";
import Colors from '../../../variables/Colors.js';

// street, city, number, postcode

export const HouseCity = styled.h1`
    font-size:          2em;
    margin-top:         10px;
    color:              ${Colors.darkGrey};
    font-weight:        400;
`;

export const HouseStreet = styled.h3`
    color:              ${Colors.darkGrey};
    font-weight:        400;
`;

export const HouseNumber = styled.h5`
    color:              ${Colors.darkGrey};

    &::before {
        content:        'House/Flat nr: ';
        font-size:      1.1em;
        font-weight:    300;
    }
`;

export const HousePostcode = styled.h5`
    color:              ${Colors.darkGrey};

    &::before {
        content:        'Postcode: ';
        font-size:      1.1em;
        font-weight:    300;
    }
`;


export const PricedSpan = styled.div`
    display:            flex;
    font-style:         italic;
    font-size:          1.1em;

`;

export const PriceText = styled.h5`
    color:              ${Colors.darkGrey};
    font-weight:        500;
`;