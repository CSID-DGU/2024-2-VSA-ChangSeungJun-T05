import styled from 'styled-components';
import { ChangeEventHandler } from 'react';
import { Input } from '../../atoms/input/Input';
import { Button } from '../../atoms/button/Button';

interface SearchBarInterface {
  size?: string;
  isValid?: boolean;
  placeholder?: string;
  inputHandeler?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  buttonHandeler?: () => void;
}

export const SearchBar = ({
  placeholder = '검색창입니다.',
  inputHandeler,
  value,
  buttonHandeler,
  isValid = true,
}: SearchBarInterface) => {
  return (
    <SearchBarWrapper>
      <Input onChange={inputHandeler} value={value} placeholder={placeholder} />
      <Button label="등록" onClick={buttonHandeler} isAble={isValid} />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
`;
