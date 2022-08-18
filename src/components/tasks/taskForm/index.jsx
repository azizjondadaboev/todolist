import { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Wrapper } from './components';
import { Button, Input } from '../../ui';

const defaultInitialValues = {
  id: null,
  name: '',
  description: '',
};

const TaskForm = ({
  initialValues = defaultInitialValues,
  handleSubmitForm,
}) => {
  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(4, 'Минимум 4 символа')
      .required('Обязательное поле'),
    description: Yup.string().trim().min(4, 'Минимум 4 символа').nullable(),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleSubmitForm,
      validateOnBlur: true,
    });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <Wrapper>
      <Input
        value={values.name}
        touched={touched.name}
        error={touched.name && errors.name}
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        label="Название задачи"
        required
      />

      <Input
        value={values.description}
        touched={touched.description}
        error={touched.description && errors.description}
        onChange={handleChange('description')}
        onBlur={handleBlur('description')}
        label="Описание задачи"
      />
      <Button
        title="Сохранить"
        onClick={handleSubmit}
        backgroundColor="#39b980"
        borderColor="#39b980"
      />
    </Wrapper>
  );
};

export default TaskForm;
