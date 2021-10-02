import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,  // Any direct divs or uls set to flex 1 to set the columns
    & > ul {
        flex: 1;
    }

    @media(max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
    text-align: center;
    }
`;