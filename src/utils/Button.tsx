import React from 'react';
import styled from 'styled-components';
import {color} from './color';
import { ButtonComponent } from './styles/Button.styled';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
}


const Button = ({label, ...props}: ButtonProps) => {
  return <ButtonComponent>{label}</ButtonComponent>;
};

export default Button;
