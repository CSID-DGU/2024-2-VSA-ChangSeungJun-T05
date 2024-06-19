import React from 'react';
import * as Style from './style';
import NavBar from '../NavBar';

export interface IPageLayout {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: IPageLayout) {
  return (
    <>
      <Style.Layout>
        <Style.Wrapper>
          {children}
          <NavBar title={title} />
        </Style.Wrapper>
      </Style.Layout>
    </>
  );
}
