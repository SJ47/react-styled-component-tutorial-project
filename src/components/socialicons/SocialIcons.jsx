import React from "react";
// import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./SocialIcons.styles";

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com">
                    {/* <FaTwitter /> */}
                    Twitter
                </a>
            </li>
            <li>
                <a href="https://facebook.com">{/* <FaFacebook /> */}</a>
                Facebook
            </li>
            <li>
                <a href="https://linkedin.com">{/* <FaLinkedin /> */}</a>
                LinkedIn
            </li>
        </StyledSocialIcons>
    );
};

export default SocialIcons;
