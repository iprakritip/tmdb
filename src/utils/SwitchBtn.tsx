'use client';

import React from 'react';
import Button from './Button';
import { SwitchBtnWrapper } from './styles/SwitchBtnStyled';

const SwitchBtn = () => {
  return (
    <SwitchBtnWrapper>
      <Button label='Today' />
      <Button label='This Week' />
      <Button label='This Month' />
    </SwitchBtnWrapper>
  );
};

export default SwitchBtn;
