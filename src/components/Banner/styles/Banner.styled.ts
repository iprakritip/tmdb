import styled from "styled-components";
import { color } from "@/utils/color";

export const BannerWrapper=styled.div`
height:45vh;
width:100vw;
background-image: url('https://www.themoviedb.org/t/p/w880_and_h600_multi_faces_filter(duotone,00192f,00baff)/r2NcIZ1FPMlxCty3vRITVTgGNVS.jpg');
background-repeat: no-repeat;
background-size: cover;
font-family:'Roboto';
padding: 0 1rem;
display:flex;
flex-direction:column;
gap:0.5rem;
justify-content:center;
  @media only screen and (max-width: 600px) {
    height:30vh;
  }
`
export const BannerText = styled.h1`
  color: #fff;
  font-size:3rem;
`;
export const BannerSubText = styled.h3`
  color: #fff;
  font-size:2rem;
  font-weight:normal;
  line-height:2rem;
`;
export const SearchBar = styled.form`
  position: relative;
  & button {
    position: absolute;
    top: 0;
    right:0;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    background-image: linear-gradient(
    to right,
    rgba(${color.tmdbLightGreen}, 1) 0%,
    rgba(${color.tmdbLightBlue}, 1) 100%
  );
  }
`;