import { useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { STATUS_ALL } from '../../utils/constants';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../utils/storage';
import LoadingCircle from '../ui/loadingCircle';

import { EmptyListBlock, LoadingBlock, Wrapper } from './components';
import TasksHeader from './tasksHeader';
import TasksList from './tasksList';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState(STATUS_ALL);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    if (!loading) {
      setItemToLocalStorage('tasks', tasks);
    }
  }, [tasks, loading]);

  const getTasksFromLocalStorage = () => {
    const tasksFromStorage = getItemFromLocalStorage('tasks');

    if (tasksFromStorage) {
      setTasks(tasksFromStorage);
    } else {
      setTasks([]);
    }

    setLoading(false);
  };

  const handleAddTask = useCallback(values => {
    setTasks(prev => [...prev, { ...values, id: nanoid() }]);
  }, []);

  const handleRemoveTask = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleChangeTask = values => {
    const changedTasks = tasks.map(task => {
      if (task.id === values.id) {
        return values;
      }

      return task;
    });

    setTasks(changedTasks);
  };

  return (
    <Wrapper>
      <TasksHeader
        handleAddTask={handleAddTask}
        searchText={searchText}
        setSearchText={setSearchText}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      {loading ? (
        <LoadingBlock>
          <LoadingCircle size={30} />
        </LoadingBlock>
      ) : null}
      {!loading && !tasks.length ? <EmptyListBlock>У Вас нет созданных задач!</EmptyListBlock> : null}
      {!loading && tasks.length ? (
        <TasksList
          tasks={tasks}
          handleChangeTask={handleChangeTask}
          handleRemoveTask={handleRemoveTask}
          searchText={searchText}
          filterStatus={filterStatus}
        />
      ) : null}
    </Wrapper>
  );
};

export default Tasks;
