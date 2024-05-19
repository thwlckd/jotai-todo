import styled from '@emotion/styled';
import useTodoAtom from '../atoms/todo/useTodoAtom';
import { ChangeEvent, FormEvent, useState } from 'react';

const Input = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodoAtom();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(input);
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <TodoInput type="text" placeholder="ADD TODO" value={input} onChange={handleChangeInput} autoFocus />
      <Button type="submit">🔍</Button>
    </Form>
  );
};

export default Input;

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 70px;
`;

const TodoInput = styled.input`
  flex-grow: 1;
  border: 1px darkgray solid;
  font-size: 24px;
  padding: 0 12px;

  &::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  width: 70px;
  background-color: darkgray;
  text-align: center;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: gray;
    transition: all 0.2s;
  }
`;
