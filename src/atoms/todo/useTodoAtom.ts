import { useSetAtom } from 'jotai';
import todoAtom from '.';

const useTodoAtom = () => {
  const setTodo = useSetAtom(todoAtom);

  const addTodo = (content: string) => {
    setTodo((todoList) => [...todoList, { id: crypto.randomUUID(), content, isDone: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodo((todoList) => todoList.filter((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodo((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  return { addTodo, toggleTodo, deleteTodo };
};

export default useTodoAtom;
