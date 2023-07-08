import {color} from '@/utils/color';
import styled from 'styled-components';

export const Navbar = styled.div`
  background-color: rgb(${color.tmdbDarkBlue});
  padding: 0.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  width: 100vw;
  @media only screen and (max-width: 600px) {
    padding:0.5rem 1.5rem;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: start;
  align-items: center;
`;
export const Menu = styled.div`
  display: none;
  color:#fff;
  width:1.5rem;
  height:2rem;
  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;
export const PrimaryLogo = styled.div`
  display: block;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const MobileLogo = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
export const NavRight = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: start;
  align-items: center;
`;
export const Icon = styled.div`
  color: rgb(${color.tmdbLightBlue});
  width: 1.35rem;
  height: 1.35rem;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
