import React from 'react';
import {
  FooterContacts,
  FooterLogoSection, FooterLogoSocialLink,
  FooterLogoSocialLinkImg,
  FooterLogoSocialLinks,
  FooterLogoText,
  FooterNavLink,
  FooterNavListItem,
  FooterSubtitle,
  FooterTitle, FooterUtility, StyledFooterBottom, StyledFooterBottomBold,
  StyledFooterTop
} from "./style";
import Logo from "../Logo/Logo";
import instagramIcon from "../../assets/img/footer/instagram-icon.svg"
import facebookIcon from "../../assets/img/footer/facebook-icon.svg"
import twitterIcon from "../../assets/img/footer/twitter-icon.svg"
import pinterestIcon from "../../assets/img/footer/pinterest-icon.svg"

function Footer() {
  return (
    <footer>
      <StyledFooterTop>
        <FooterContacts>
          <FooterTitle>Contact Us</FooterTitle>
          <nav>
            <ul>
              <FooterNavListItem>
                <FooterSubtitle>Email</FooterSubtitle>
                <FooterNavLink href="mailto:needhelp@Organia.com">needhelp@Organia.com</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterSubtitle>Phone</FooterSubtitle>
                <FooterNavLink href="tel:666888888">666888888</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterSubtitle>Address</FooterSubtitle>
                <div>88 road, borklyn street, USA</div>
              </FooterNavListItem>
            </ul>
          </nav>
        </FooterContacts>
        <FooterLogoSection>
          <Logo/>
          <FooterLogoText>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing
          </FooterLogoText>
          <FooterLogoSocialLinks>
            <FooterLogoSocialLink href="https://www.instagram.com/">
              <FooterLogoSocialLinkImg src={instagramIcon} alt="Instagram"/>
            </FooterLogoSocialLink>
            <FooterLogoSocialLink href="https://www.facebook.com/">
              <FooterLogoSocialLinkImg src={facebookIcon} alt="Facebook"/>
            </FooterLogoSocialLink>
            <FooterLogoSocialLink href="https://twitter.com/">
              <FooterLogoSocialLinkImg src={twitterIcon} alt="Twitter"/>
            </FooterLogoSocialLink>
            <FooterLogoSocialLink href="https://www.pinterest.co.uk/">
              <FooterLogoSocialLinkImg src={pinterestIcon} alt="Pinterest"/>
            </FooterLogoSocialLink>
          </FooterLogoSocialLinks>
        </FooterLogoSection>
        <FooterUtility>
          <FooterTitle>Utility Pages</FooterTitle>
          <nav>
            <ul>
              <FooterNavListItem>
                <FooterNavLink to="style-guide">Style Guide</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink to="404-error">404 Not Found</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink to="password-protected">Password Protected</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink to="licences">Licences</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink to="changelog">Changelog</FooterNavLink>
              </FooterNavListItem>
            </ul>
          </nav>
        </FooterUtility>
      </StyledFooterTop>
      <StyledFooterBottom>
        Copyright ©
        <StyledFooterBottomBold> Organick </StyledFooterBottomBold>
        | Designed by <StyledFooterBottomBold>VictorFlow </StyledFooterBottomBold>
        Templates - Powered by <StyledFooterBottomBold>Webflow</StyledFooterBottomBold>
      </StyledFooterBottom>
    </footer>
  );
}

export default Footer;