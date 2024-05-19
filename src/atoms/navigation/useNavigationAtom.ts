import { useSetAtom } from 'jotai';
import navigationAtom, { Tab } from '.';

const useNavigationAtom = () => {
  const setNavigation = useSetAtom(navigationAtom);

  const activateTab = (tab: Tab) => {
    setNavigation(tab);
  };

  return { activateTab };
};

export default useNavigationAtom;
