import { atomWithStorage } from 'jotai/utils';
import { Todo } from '../../types/todo';

const todoAtom = atomWithStorage<Todo[]>('jotai-todo', []);

export default todoAtom;
