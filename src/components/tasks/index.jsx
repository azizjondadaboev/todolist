import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { STATUS_ALL } from '../../utils/constants';
import { getItemFromLocalStorage } from '../../utils/storage';
import LoadingCircle from '../ui/loadingCircle';

import { EmptyListBlock, LoadingBlock, Wrapper } from './components';
import TasksHeader from './tasksHeader';
import TasksList from './tasksList';

const Tasks = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState(STATUS_ALL);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  const getTasksFromLocalStorage = () => {
    const tasksFromStorage = getItemFromLocalStorage('tasks');

    if (tasksFromStorage) {
      setTasks(tasksFromStorage);
    }

    setLoading(false);
  };

  const handleAddTask = (values) => {
    setTasks((prev) => prev.push({ ...values, id: nanoid() }));
  };

  const handleRemoveTask = (id) => {};

  const handleChangeTask = (id, values) => {};

  return (
    <Wrapper>
      <TasksHeader handleAddTask={handleAddTask} />
      {loading ? (
        <LoadingBlock>
          <LoadingCircle size={30} />
        </LoadingBlock>
      ) : null}
      {!loading && !tasks ? (
        <EmptyListBlock>У Вас нет созданных задач!</EmptyListBlock>
      ) : null}
      {!loading && tasks ? <TasksList /> : null}
    </Wrapper>
  );
};

export default Tasks;
