import Input from './components/Input';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Layout>
      <Input />
      <Navigation />
      <TodoList />
    </Layout>
  );
};

export default App;
