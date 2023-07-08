import React from 'react';
import { InputElement } from './styles/Input.styles';



interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

const Input = ({...props}: InputProps) => {
  return <InputElement type={props.type} placeholder={props.placeholder} />;
};

export default Input;
