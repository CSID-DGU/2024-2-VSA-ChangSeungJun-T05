import styled from 'styled-components';

import icon_search from '@assets/img/icon_search.svg';
import icon_safe from '@assets/img/icon_safe.svg';
import icon_dangerous from '@assets/img/icon_dangerous.svg';

import ani_spinner from '@assets/img/ani_spinner.svg';

export interface LabelProps {
  /**
   * 아이콘 여부
   */
  isIcon?: boolean;
  /**
   * 아이콘 종류
   */
  icon?: 'search' | 'safe' | 'dangerous' | 'loading';
  /**
   * 라벨의 내용
   */
  label?: string;
  /**
   * 라벨의 폰트 사이즈
   */
  size?: 'H6' | 'B1' | 'B2';
  /**
   * 라벨의 폰트 컬러
   */
  color?: string;
}

/**
 * 설명하는 라벨 들
 */

export const Label = ({ isIcon = false, icon, label, size = 'B1', color = '#111111' }: LabelProps) => {
  return (
    <LabelWrapper className={[size].join('')} color={color}>
      {isIcon ? <img src={getIcon(icon)} alt={icon} /> : <></>}
      {label}
    </LabelWrapper>
  );
};

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  img {
    width: 20px;
    height: 20px;
  }

  color: ${props => props.color};
`;

const getIcon = (icon: string) => {
  switch (icon) {
    case 'search':
      return icon_search;
    case 'safe':
      return icon_safe;
    case 'dangerous':
      return icon_dangerous;
    case 'loading':
      return ani_spinner;
  }
};
