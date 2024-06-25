import React from 'react';
import styled from 'styled-components';
import {
  DangerousLabel,
  SafeLabel,
  SearchLabel,
  CaptionLabel,
  LoadingLabel,
} from '../../common/atoms/label/Label.stories';
import { Label, LabelProps } from '../../common/atoms/label/Label';

interface HoverModalProps {
  label?: string;
  type: HoverModalType;
  isCaption?: boolean;
  caption?: string;
}

type HoverModalType = 'dangerous' | 'safe' | 'search' | 'loading';

interface HoverModalTypeConfig {
  labelProps: LabelProps;
  color: string;
}

const hoverModalTypeConfigMap: Record<HoverModalType, HoverModalTypeConfig> = {
  dangerous: {
    labelProps: DangerousLabel.args,
    color: '#F64258',
  },
  safe: {
    labelProps: SafeLabel.args,
    color: '#3ECE1A',
  },
  search: {
    labelProps: SearchLabel.args,
    color: '#3C96E9',
  },
  loading: { labelProps: LoadingLabel.args, color: '#9FA4A8' },
};

/**
 * 링크에 마우스 호버시 생성되는 모달입니다.
 */
export const HoverModal = ({ label, type, isCaption = false, caption }: HoverModalProps) => {
  const { labelProps, color } = hoverModalTypeConfigMap[type];

  return (
    <ModalWrapper color={color}>
      {labelProps && <Label label={label} {...labelProps} />}
      {isCaption ? <Label label={caption} {...CaptionLabel.args} /> : <></>}
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  max-width: 320px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;

  border: 1px solid;
  border-color: ${({ color }) => color};
  background-color: white;
  border-radius: 8px;
  .B2 {
    word-break: break-all;
  }
`;
