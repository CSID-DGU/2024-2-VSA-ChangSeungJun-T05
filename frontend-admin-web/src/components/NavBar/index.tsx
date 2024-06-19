import * as Styled from './style';
import HomeButton from '../Button/HomeButton';

type Props = {
  title?: string;
};

export default function NavBar({ title }: Props) {

  return (
    <Styled.NavBar>
      <HomeButton>
        DRL
      </HomeButton>
      <Styled.Title>{title}</Styled.Title>
    </Styled.NavBar>
  );
}
