import theme from "@/theme";
import styled from "styled-components";

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 30px;
    overflow: hidden;
    border-bottom: 1px solid ${theme.colors.formBorder};
`;

export const LabelContainer = styled.div`
    width: 200px;
    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const LabelTag = styled.p<{ label: string }>`
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    color: ${({ label }) =>
        label === 'Phishing' ? theme.colors.red :
        label === 'Defacement' ? theme.colors.purple :
        label === 'Malware' ? theme.colors.orange : theme.colors.primary};
    border-radius: 32px;
    border: 2px solid ${({ label }) =>
        label === 'Phishing' ? theme.colors.red :
        label === 'Defacement' ? theme.colors.purple :
        label === 'Malware' ? theme.colors.orange : theme.colors.primary};
    padding: 5px 10px;
    width: fit-content;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const URLContainer = styled.div`
    flex-grow: 1;
`;

export const URLText = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.title1};
    white-space: nowrap;
    overflow: auto;
    @media (max-width: 768px) {
        font-size: 12px;
        width: 180px;
    }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  cursor: pointer;
  accent-color: ${theme.colors.primary};

  &:checked {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 6px rgba(0, 123, 255, 0.25);
  }
`;