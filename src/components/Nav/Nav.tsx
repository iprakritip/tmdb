'use client';

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import HamburgerIcon from './HamburgerIcon';
import {Logo, ResponsiveLogo} from './Logo';

import {
  Navbar,
  NavLeft,
  NavRight,
  Icon,
  MobileLogo,
  PrimaryLogo,
  Menu,
} from './styles/Nav.styled';
import {NavText} from './styles/NavText.styled';

const Nav = () => {
  return (
    <div>
      <Navbar>
        <Menu>
          <HamburgerIcon />
        </Menu>
        <NavLeft>
          <PrimaryLogo>
            <Logo />
          </PrimaryLogo>
          <MobileLogo>
            <ResponsiveLogo />
          </MobileLogo>
          <Link href='/movies'>
            <NavText>Movies</NavText>
          </Link>
          <NavText>TV Shows</NavText>
          <NavText>People</NavText>
        </NavLeft>
        <NavRight>
          <NavText>Login</NavText>
          <NavText>Join TMDB</NavText>
          <Icon>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </Icon>
        </NavRight>
      </Navbar>
    </div>
  );
};

export default Nav;
