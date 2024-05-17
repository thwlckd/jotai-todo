import { Children } from 'react';
import styled from '@emotion/styled';

const TABS = ['ALL', 'ACTIVE', 'DONE'];

const Navigation = () => {
  return (
    <NavigationWrpper>
      {Children.toArray(
        TABS.map((tab) => (
          <li>
            <TabButton>{tab}</TabButton>
          </li>
        )),
      )}
    </NavigationWrpper>
  );
};

export default Navigation;

const NavigationWrpper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
  width: 100%;
  font-size: 20px;
`;

const TabButton = styled.button`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
