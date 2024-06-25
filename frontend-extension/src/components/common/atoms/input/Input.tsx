import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface InputProps {
  /**
   * 길이
   */
  size?: string;
  /**
   * 입력가능여부
   */
  isAble?: boolean;
  /**
   * 플레이스 홀더
   */
  placeholder?: string;
  /**
   * 길이
   */
  line?: number;

  /**
   * 이벤트 핸들러
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;

  /**
   * 값
   */
  value?: string;
}

export const Input = ({
  size = '200px',
  isAble = true,
  placeholder = '입력해주세요.',
  line = 1,
  onChange,
  value,
}: InputProps) => {
  return (
    <InputWrapper $size={size}>
      <InputBar
        $line={line}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="B1"
        disabled={!isAble}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ $size: string }>`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  min-width: ${props => props.$size};
  background-color: #f7f8fa;
  flex-grow: 1;
`;

const InputBar = styled.textarea<{ $line: number }>`
  height: calc(28px * ${props => props.$line});
  width: 100%;
  word-break: break-all;
  resize: none;
  background-color: transparent;
  border-radius: 0;
  border: none;
  padding: 0;
  color: #111111;
  &:focus {
    outline: none;
  }
`;
