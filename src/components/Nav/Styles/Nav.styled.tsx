import {color} from '@/utils/color';
import styled from 'styled-components';

export const Navbar = styled.div`
  background-color: ${color.tmdbDarkBlue};
  padding: 0.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  width:100vw
`;
export const NavLeft = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: start;
  align-items: center;
`;
export const NavRight = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: start;
  align-items: center;
`;
export const Icon = styled.div`
  color: ${color.tmdbLightBlue};
  width: 1.35rem;
  height: 1.35rem;
  cursor:pointer;
`;
