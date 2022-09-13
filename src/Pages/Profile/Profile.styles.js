import styled from "styled-components";
import Colors from "../../variables/Colors";

export const ProfileWrapper = styled.main`
    max-width:      700px;
    margin:         10px auto;
    padding:        0px 10px;
`;

export const ProfileInfo = styled.section`
    display:        flex;
    flex:           1 1 300px;
    border:         1px solid ${Colors.darkGrey};
    background:     whitesmoke;
    max-width:      100%;
    padding:        10px 20px 10px 20px;
    display:        flex;
    flex-wrap:      wrap;
    border-radius:  10px;
    margin-top:     20px;
`;

export const ProfileAvatar = styled.img`
    max-width:      60px;
    max-height:     60px;
    border-radius:  50%;
`;

export const ProfileWellcome = styled.h1`
    font-weight:    400;
    color:          ${Colors.darkGrey};    
`;

export const ProfileInfoTextWrapper = styled.div`
    display:        flex;
    flex-direction: column;
    justify-content:space-around;
    margin-left:    20px;

    & p {
        padding:    0;
        margin:     0;
    }
`;


export const EditWrapper = styled.section`
    margin-top:     20px;
    background:     whitesmoke;
    border-radius:  7px;
    padding:        10px 20px;
    border:         1px solid ${Colors.darkGrey};
`;

export const CreateNewHouse = styled.p`
    font-size:      .9em;
    cursor:         pointer;
    max-width:      max-content;
`;
