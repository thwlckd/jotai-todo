import { atom } from 'jotai';

export type Tab = (typeof tabs)[number];
export const tabs = ['ALL', 'ACTIVE', 'DONE'] as const;

const navigationAtom = atom<Tab>(tabs[0]);

export default navigationAtom;
