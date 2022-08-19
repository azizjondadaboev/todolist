import { Wrapper } from './components';
import TaskItem from './taskItem';

const TasksList = ({ tasks, handleChangeTask, handleRemoveTask }) => {
  return (
    <Wrapper>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} handleChangeTask={handleChangeTask} handleRemoveTask={handleRemoveTask} />
      ))}
    </Wrapper>
  );
};

export default TasksList;
