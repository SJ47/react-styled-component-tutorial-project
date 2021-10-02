import React from "react";
import SocialIcons from "../socialicons/SocialIcons";
import { Container } from "../Container.styles";
import { Flex } from "../Flex.styles";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="../images/logo_white.svg" alt="" />

                <Flex>
                    <ul>
                        <li>
                            Non officia sunt culpa est tempor in esse in cillum.
                            Veniam consequat proident incididunt consequat duis
                            nostrud. Nostrud enim enim ullamco dolor anim dolore
                            consequat ea dolore cillum. Aute exercitation ipsum
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>

                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved.</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
