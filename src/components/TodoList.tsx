import { useAtomValue } from 'jotai';
import todoAtom from '../atoms/todo';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useAtomValue(todoAtom);

  return (
    <TodoListWrappper>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrappper>
  );
};

export default TodoList;

const TodoListWrappper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
