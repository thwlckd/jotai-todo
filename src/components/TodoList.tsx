import styled from '@emotion/styled';
import useTodoAtom from '../atoms/todo/useTodoAtom';

const TodoList = () => {
  const { getActiveTodoList } = useTodoAtom();

  return <TodoListWrappper>{getActiveTodoList()}</TodoListWrappper>;
};

export default TodoList;

const TodoListWrappper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
