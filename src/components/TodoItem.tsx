import styled from '@emotion/styled';
import { Todo } from '../types/todo';
import useTodoAtom from '../atoms/todo/useTodoAtom';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { deleteTodo } = useTodoAtom();

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <ItemWrapper>
      <CheckBox type="checkbox" defaultChecked={todo.isDone} />
      <TodoContent $isChecked={todo.isDone}>{todo.content}</TodoContent>
      <DeleteButton onClick={handleDeleteTodo}>DELETE</DeleteButton>
    </ItemWrapper>
  );
};

export default TodoItem;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  font-size: 28px;
  padding: 15px 20px;
  border: 1px darkgray solid;
  background-color: white;
`;

const CheckBox = styled.input`
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: gray;
  }

  &:checked::after {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

const TodoContent = styled.p<{ $isChecked: boolean }>`
  flex: 1;
  word-break: break-all;
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 2px;
  background-color: lightpink;
  font-size: 16px;
  cursor: pointer;
`;
