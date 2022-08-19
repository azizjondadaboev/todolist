import { useState } from 'react';
import { STATUS_DONE, STATUS_NOT_DONE } from '../../../../utils/constants';
import { Button, Modal } from '../../../ui';
import TaskForm from '../../taskForm';
import { TaskActions, TaskDescription, TaskName, TaskStatus, Wrapper } from './components';

const TaskItem = ({ task, handleChangeTask, handleRemoveTask }) => {
  const [showModal, setShowModal] = useState(false);

  const onChangeTask = values => {
    handleChangeTask(values);
    setShowModal(false);
  };

  const onChangeStatus = () => {
    handleChangeTask({
      ...task,
      status: task.status === STATUS_DONE ? STATUS_NOT_DONE : STATUS_DONE,
    });
  };

  return (
    <>
      <Wrapper>
        <TaskName>{task.name}</TaskName>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskStatus className={task.status}>
          <span>{task.status === STATUS_DONE ? 'Выполнено' : 'Не выполнено'}</span>
        </TaskStatus>
        <TaskActions>
          <Button title="Сменить статус" onClick={onChangeStatus} size="sm" textTransform="none" />
          <Button
            title="Изменить"
            onClick={() => setShowModal(true)}
            size="sm"
            textTransform="none"
            backgroundColor="#39b980"
            borderColor="#39b980"
          />
          <Button
            title="Удалить"
            onClick={() => handleRemoveTask(task.id)}
            size="sm"
            textTransform="none"
            backgroundColor="#d92626"
            borderColor="#d92626"
          />
        </TaskActions>
      </Wrapper>

      <Modal title="Изменение задачи" show={showModal} onClose={() => setShowModal(false)} maxWidth={600} fixedWidth>
        <TaskForm initialValues={task} handleSubmitForm={onChangeTask} />
      </Modal>
    </>
  );
};

export default TaskItem;
