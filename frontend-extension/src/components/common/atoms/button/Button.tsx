import styled from 'styled-components';

interface ButtonProps {
  /**
   * 버튼의 활성화 여부
   */
  isAble?: boolean;
  /**
   * 버튼의 라벨
   */
  label: string;
  /**
   * 버튼의 click handler
   */
  onClick: () => void;
}

/**
 * 유저가 클릭할 수 있는 기본 버튼
 */
export const Button = ({ isAble = true, label = 'button', onClick = () => {} }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={isAble ? onClick : () => {}} className={['Btn', `isAble_${isAble}`].join(' ')}>
      {label}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  min-width: 48px;
  padding: 16px 24px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  &.isAble_true {
    cursor: pointer;
    background-color: #3c96e9;
    color: white;
    &:hover {
      background-color: #9ccaf5;
    }
    &:active {
      background-color: #2e72b2;
    }
  }

  &.isAble_false {
    background-color: #f1f1f1;
    color: #c4c4c4;
  }
`;
