import styled from "styled-components";
import Colors from "../../variables/Colors";

export const HeaderWrapper = styled.header`
    display:            flex;
    flex-direction:     ${props => !props.isMobile ? 'column' : 'row'};
    justify-content:    space-between;
    align-items:        ${props => !props.isMobile ? 'center' : 'flex-start'};
    background:         ${Colors.darkGrey};
    padding:            10px 20px;
`;


export const LinkWrapperDesktop = styled.ul`
    display:            flex;
`;

export const LinkWrapperMobile = styled.ul`
    display:            flex;
`;

export const LinkElement = styled.li`
    color:              white;
    list-style:         none;

    & a {
        color:          ${Colors.orange};
        margin:         0 20px;
        text-decoration: none;
    }
`;

export const LinksWrapperMobile = styled.ul`
    display:            flex;
    flex-direction:     column;
    margin-right:       auto;
    padding-left:       0px;
    margin-top:         50px;
    height:             fit-content;

    & li {
        margin: 5px 0px;
        margin-left: -40px;
        padding: 0px;
        text-align: left;
    }
`;

export const MobileMenuHolder = styled.div`
    position:           absolute;
    top:                10px;
    right:              15px;
`;

export const LogoHolder = styled.div`
    position:           ${props => props.isMobile ? 'absolute' : 'block'};
    top:                ${props => props.isMobile ? '20px' : '25px'};
    left:               15px;
`;