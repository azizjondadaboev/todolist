import { useEffect, useState } from 'react';
import { STATUS_ALL } from '../../../utils/constants';
import { EmptyListBlock } from '../components';
import { Wrapper } from './components';
import TaskItem from './taskItem';

const TasksList = ({ tasks, handleChangeTask, handleRemoveTask, searchText, filterStatus }) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    filterTasks();
  }, [searchText, filterStatus, tasks]);

  const filterTasks = () => {
    const formattedText = searchText.toLowerCase().replaceAll(' ', '');

    setFilteredTasks(
      tasks.filter(
        task =>
          (filterStatus === STATUS_ALL || task.status === filterStatus) &&
          task.name.toLowerCase().replaceAll(' ', '').includes(formattedText)
      )
    );
  };

  return (
    <Wrapper>
      {!filteredTasks.length && (searchText.length || filterStatus !== STATUS_ALL) ? (
        <EmptyListBlock>По заданным параметрам поиска не найдено задач!</EmptyListBlock>
      ) : null}

      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} handleChangeTask={handleChangeTask} handleRemoveTask={handleRemoveTask} />
      ))}
    </Wrapper>
  );
};

export default TasksList;
