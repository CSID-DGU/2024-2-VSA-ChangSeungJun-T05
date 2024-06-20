import Button from '@/components/Button';
import { LoginButtonProps } from '@/types/button';
import theme from '@/theme';

export default function LoginButton(props: LoginButtonProps) {
  return (
    <Button
      width='60%'
      height='auto'
      backgroundColor={theme.colors.primary}
      borderRadius='12px'
      margin="10px 0"
      padding="10px 50px"
      {...props}
      position={'relative'}
      zIndex={1}
      color={theme.colors.whiteText}
      fontSize={28}
      fontWeight='700'
    >
      Login
    </Button>
  );
}
