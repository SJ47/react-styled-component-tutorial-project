import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${(props) => props.theme.colors.header};
    padding: 40px 0;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${(props) => props.theme.mobile}) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    @media(max-width: ${(props) => props.theme.mobile}) {
        margin-bottom: 40px;
    }
`;

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${(props) => props.theme.mobile}) {
    margin: 40px 0 30px;
    }
`;