import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./Header.styles";
import { Container } from "../Container.styles";
import { Button } from "../button/Button.styles";
import { Flex } from "../Flex.styles"; // You can use this when you want to style something side by side
import { StyledThemeSwitch } from "../themeswitch/themeSwitch.styles";

const Header = ({ handleThemeSwitch, icon }) => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="../images/logo.svg" alt="" />
                    <Button>Try It Free</Button>
                    <StyledThemeSwitch onClick={handleThemeSwitch}>
                        {icon}
                    </StyledThemeSwitch>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as your engage in genuine
                            discussion.
                        </p>

                        <Button bg="#ff0099" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src="../images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;
