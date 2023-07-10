import styled from "styled-components";
import { color } from "../color";

export const ButtonComponent = styled.button`
 
  
  border: 0;
  border-radius: 30px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
 
  &:hover {
    color: rgb(${color.tmdbDarkBlue});
  }
`;