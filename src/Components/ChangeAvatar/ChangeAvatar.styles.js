import styled from "styled-components";
import Colors from "../../variables/Colors";


// Change avatar wrapper section
export const ChangeWrapper = styled.aside`
    margin-top:     20px;
    background:     whitesmoke;
    border-radius:  7px;
    padding:        10px 20px;
    border:         1px solid ${Colors.darkGrey};
`;

// Avatar input
export const AvatarInput = styled.input`
    &::-webkit-file-upload-button {
        background-color:   transparent;
        border:             1px solid ${Colors.darkGrey};
}
`;

export const AvatarButton = styled.button`
    cursor:                 pointer;
    background:             ${Colors.darkGrey};
    border:                 none;
    color:                  ${Colors.orange};
    padding:                5px 20px;
    border-radius:          5px;
`;