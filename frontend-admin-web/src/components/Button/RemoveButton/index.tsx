import React from 'react';
import Button from '@/components/Button';
import { RemoveButtonProps } from '@/types/button';
import theme from '@/theme';

export default function RemoveButton(props: RemoveButtonProps) {
  return (
    <Button
      width='auto'
      height='auto'
      backgroundColor={theme.colors.primary}
      borderRadius='12px'
      margin="10px 0"
      padding="10px 30px"
      {...props}
      position={'fixed'}
      top= {60}
      right= {20}
      zIndex={1}
      color={theme.colors.whiteText}
      fontSize={20}
      fontWeight='700'
    >
      Remove
    </Button>
  );
}
