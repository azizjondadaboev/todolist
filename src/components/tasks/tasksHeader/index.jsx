import { useState, memo } from 'react';
import { Button, Modal } from '../../ui';
import TaskForm from '../taskForm';
import { Filters, Wrapper } from './components';

const TasksHeader = ({ handleAddTask }) => {
  const [showModal, setShowModal] = useState(false);

  const onAddTask = values => {
    handleAddTask(values);
    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        <Filters>Test</Filters>
        <Button title="Добавить задачу" onClick={() => setShowModal(true)} />
      </Wrapper>

      <Modal title="Добавление задачи" show={showModal} onClose={() => setShowModal(false)} maxWidth={600} fixedWidth>
        <TaskForm handleSubmitForm={onAddTask} />
      </Modal>
    </>
  );
};

export default memo(TasksHeader);
