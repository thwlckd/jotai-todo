import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <TodoListWrappper>
      <TodoItem todo={{ id: '1', content: 'aa', isDone: false }} />
      <TodoItem todo={{ id: '2', content: 'bb', isDone: false }} />
      <TodoItem todo={{ id: '3', content: 'cc', isDone: false }} />
      <TodoItem todo={{ id: '4', content: 'dd', isDone: false }} />
      <TodoItem todo={{ id: '5', content: 'ee', isDone: false }} />
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
