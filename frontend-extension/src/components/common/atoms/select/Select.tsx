import styled from 'styled-components';
import { ChangeEventHandler } from 'react';

interface SelectProps {
  /**
   * 현재 값
   */
  value: string;
  /**
   * 체인지 헨들러
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /**
   * 옵션들
   */
  options?: any[];
}

/**
 * 옵션을 선택할 수 있는 select 입니다
 */
export const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <SelectWrapper className="B1" value={value} onChange={onChange}>
      <option value="" selected disabled hidden>
        --- 선택 ---
      </option>
      {options?.map(item => {
        return <option value={item.value}>{item.description}</option>;
      })}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.select`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f7f8fa;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
