import React from 'react';
import Button from '..';
import { FormSubmitButtonProps } from '@/types/button';
import ReportIcon from '@/assets/icons/report.png';
export default function ReportFormSubmitButton(props: FormSubmitButtonProps) {
  return (
    <Button
      width="24px"
      height="24px"
      background={ReportIcon.src}
      {...props}
      position={'absolute'}
      right={7}
      top={18}
      zIndex={1}
    >
      {props.children}
    </Button>
  );
}