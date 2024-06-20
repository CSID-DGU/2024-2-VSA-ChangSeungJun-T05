import * as Styled from './style';
import { TURLList } from '@/types/urlList';

type TURLListProps = {
    urlData: TURLList;
    onToggle: () => void;
    selected: boolean;
};

export default function URLList({ urlData, onToggle, selected }: TURLListProps) {
    return (
        <Styled.RowContainer>
            <Styled.LabelContainer>
                <Styled.LabelTag label={urlData.label}>{urlData.label}</Styled.LabelTag>
            </Styled.LabelContainer>
            <Styled.URLContainer>
                <Styled.URLText>{urlData.url}</Styled.URLText>
            </Styled.URLContainer>
            <Styled.CheckBox type="checkbox" checked={selected} onChange={onToggle} />
        </Styled.RowContainer>
    );
}
