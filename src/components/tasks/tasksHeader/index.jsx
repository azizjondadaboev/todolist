import { memo, useState } from 'react';
import { STATUS_ALL, STATUS_DONE, STATUS_NOT_DONE } from '../../../utils/constants';

import { Button, Input, Modal } from '../../ui';
import TaskForm from '../taskForm';
import { Filters, StatusFilterBlock, Wrapper } from './components';

const TasksHeader = ({ handleAddTask, searchText, setSearchText, filterStatus, setFilterStatus }) => {
  const [showModal, setShowModal] = useState(false);

  const onAddTask = values => {
    handleAddTask(values);
    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        <Filters>
          <Input value={searchText} onChange={setSearchText} placeholder="Поиск ..." />
          <StatusFilterBlock>
            <div>
              <Button
                title="Все"
                onClick={() => setFilterStatus(STATUS_ALL)}
                size="sm"
                borderRadius={8}
                borderColor={filterStatus === STATUS_ALL ? '#39b980' : 'transparent'}
                backgroundColor={filterStatus === STATUS_ALL ? '#39b980' : 'transparent'}
                color={filterStatus === STATUS_ALL ? '#fff' : '#39b980'}
              />
            </div>
            <div>
              <Button
                title="Выполненные"
                onClick={() => setFilterStatus(STATUS_DONE)}
                size="sm"
                borderRadius={8}
                borderColor={filterStatus === STATUS_DONE ? '#39b980' : 'transparent'}
                backgroundColor={filterStatus === STATUS_DONE ? '#39b980' : 'transparent'}
                color={filterStatus === STATUS_DONE ? '#fff' : '#39b980'}
              />
            </div>
            <div>
              <Button
                title="Не выполненные"
                onClick={() => setFilterStatus(STATUS_NOT_DONE)}
                size="sm"
                borderRadius={8}
                borderColor={filterStatus === STATUS_NOT_DONE ? '#39b980' : 'transparent'}
                backgroundColor={filterStatus === STATUS_NOT_DONE ? '#39b980' : 'transparent'}
                color={filterStatus === STATUS_NOT_DONE ? '#fff' : '#39b980'}
              />
            </div>
          </StatusFilterBlock>
        </Filters>

        <Button title="Добавить задачу" onClick={() => setShowModal(true)} />
      </Wrapper>

      <Modal title="Добавление задачи" show={showModal} onClose={() => setShowModal(false)} maxWidth={600} fixedWidth>
        <TaskForm handleSubmitForm={onAddTask} />
      </Modal>
    </>
  );
};

export default memo(TasksHeader);
