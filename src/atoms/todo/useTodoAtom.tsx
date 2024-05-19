import { useAtom, useAtomValue } from 'jotai';
import todoAtom from '.';
import navigationAtom, { tabs } from '../navigation';
import TodoItem from '../../components/TodoItem';

const useTodoAtom = () => {
  const [todoList, setTodoList] = useAtom(todoAtom);
  const activeTab = useAtomValue(navigationAtom);

  const addTodo = (content: string) => {
    setTodoList((todoList) => [...todoList, { id: crypto.randomUUID(), content, isDone: false }]);
  };

  const toggleTodo = (id: string) => {
    setTodoList((todoList) => todoList.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const getActiveTodoList = () => {
    let filteredTodo = todoList;

    switch (activeTab) {
      case tabs[0]: // ALL
        break;
      case tabs[1]: // ACTIVE
        filteredTodo = todoList.filter((todo) => todo.isDone === false);
        break;
      case tabs[2]: // DONE
        filteredTodo = todoList.filter((todo) => todo.isDone === true);
        break;
      default:
        return null;
    }

    return filteredTodo.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  };

  return { addTodo, toggleTodo, deleteTodo, getActiveTodoList };
};

export default useTodoAtom;
