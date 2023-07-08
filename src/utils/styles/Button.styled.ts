import styled from "styled-components";
import { color } from "../color";

export const ButtonComponent = styled.button`
  padding: 0.9rem 1.5rem;
  background-image: linear-gradient(
    to right,
    rgba(${color.tmdbLightGreen}, 1) 0%,
    rgba(${color.tmdbLightBlue}, 1) 100%
  );
  border: 0;
  border-radius: 30px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: rgb(${color.tmdbDarkBlue});
  }
`;