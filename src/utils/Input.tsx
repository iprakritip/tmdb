import React from 'react';
import {InputElement} from './styles/Input.styled';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

const Input = ({...props}: InputProps) => {
  return <InputElement type={props.type} placeholder={props.placeholder} onChange={props.onChange} />;
};

export default Input;
