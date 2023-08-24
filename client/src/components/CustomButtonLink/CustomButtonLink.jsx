import React from 'react';
import {StyledLink, LinkContent, StyledButton, Arrow} from './styles'
import arrow from "../../assets/img/common/arrow.svg";

export function CustomButton({children, type, ...props}) {
  return (
    <StyledButton type={type} {...props}>
      <LinkContent>
        {children}
      </LinkContent>
    </StyledButton>
  );
}

export function CustomArrowButton({children, type, ...props}) {
  return (
    <StyledButton type={type} {...props}>
      <LinkContent>
        <div>{children}</div>
        <Arrow>
          <img src={arrow} alt=""/>
        </Arrow>
      </LinkContent>
    </StyledButton>
  );
}

export function CustomLink({children, href, ...props}) {
  return (
    <StyledLink href={href} {...props}>
      <LinkContent>
        {children}
      </LinkContent>
    </StyledLink>
  );
}

export function CustomArrowLink({children, href, ...props}) {
  return (
    <StyledLink href={href} {...props}>
      <LinkContent>
        <div>{children}</div>
        <Arrow>
          <img src={arrow} alt=""/>
        </Arrow>
      </LinkContent>
    </StyledLink>
  );
}