import { Children } from 'react';
import { useAtomValue } from 'jotai';
import styled from '@emotion/styled';
import navigationAtom, { tabs } from '../atoms/navigation';
import useNavigationAtom from '../atoms/navigation/useNavigationAtom';

const Navigation = () => {
  const activeTab = useAtomValue(navigationAtom);
  const { activateTab } = useNavigationAtom();

  const handleClickTab = (index: number) => {
    activateTab(tabs[index]);
  };

  return (
    <NavigationWrpper>
      {Children.toArray(
        tabs.map((tab, i) => (
          <li>
            <TabButton isActive={activeTab === tab} onClick={() => handleClickTab(i)}>
              {tab}
            </TabButton>
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

const TabButton = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};

  &:hover {
    text-decoration: underline;
  }
`;
