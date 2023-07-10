import styled from "styled-components";
import { color } from "../color";

export const SwitchBtnWrapper=styled.div`
display: flex;
& button{
    background:linear-gradient(
    to right,
    rgba(${color.tmdbLightGreen}, 1) 0%,
    rgba(${color.tmdbLightBlue}, 1) 100%);
    background-clip:text;
    text-fill-color: transparent;
}
`