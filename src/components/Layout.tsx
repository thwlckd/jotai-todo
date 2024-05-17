import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header>Jotai Todo List</Header>
      {children}
      <Footer>
        <p>Created by Hyub2</p>
        <p>Series of Todo App using State Management Libraries</p>
      </Footer>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  width: 500px;
  background-color: white;
`;

const Header = styled.header`
  padding: 50px 0;
  color: #2c4251;
  font-size: 40px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 100px;
  color: gray;
`;
