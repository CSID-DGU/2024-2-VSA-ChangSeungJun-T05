import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeColorKey =
    | 'primary'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'lightGrayWrapper'
    | 'formBorder'
    | 'whiteText'
    | 'cardColor'
;

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
  }
}

const colors = {
  primary: '#3c96e8',
  title1: '#252525',
  title2: '#797979',
  title3: '#B4B6BC',
  lightGrayWrapper: '#f7f8fa',
  formBorder: '#85bef2',
  whiteText: '#FFFFFF',
  cardColor: '#F6F7FB',
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
