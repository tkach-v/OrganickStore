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
import Logo from "../common/Logo";

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
              <FooterLogoSocialLinkImg src="./img/footer/instagram-icon.svg" alt="Instagram"/>
            </FooterLogoSocialLink>
            <FooterLogoSocialLink href="https://www.facebook.com/">
              <FooterLogoSocialLinkImg src="./img/footer/facebook-icon.svg" alt="Facebook"/>
            </FooterLogoSocialLink>
            <FooterLogoSocialLink href="https://twitter.com/">
              <FooterLogoSocialLinkImg src="./img/footer/twitter-icon.svg" alt="Twitter"/>
            </FooterLogoSocialLink>
            <FooterLogoSocialLink href="https://www.pinterest.co.uk/">
              <FooterLogoSocialLinkImg src="./img/footer/pinterest-icon.svg" alt="Pinterest"/>
            </FooterLogoSocialLink>
          </FooterLogoSocialLinks>
        </FooterLogoSection>
        <FooterUtility>
          <FooterTitle>Utility Pages</FooterTitle>
          <nav>
            <ul>
              <FooterNavListItem>
                <FooterNavLink href="#">Style Guide</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink href="#">404 Not Found</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink href="#">Password Protected</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink href="#">Licences</FooterNavLink>
              </FooterNavListItem>
              <FooterNavListItem>
                <FooterNavLink href="#">Changelog</FooterNavLink>
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