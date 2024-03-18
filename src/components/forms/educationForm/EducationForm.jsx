import { DynamicForm } from '../../prototypes/form/DynamicForm';
import Fields from '../../JSON/Fields.json'
import { useMemo } from 'react';

export const EducationForm = ({ props }) => {
  const id = 'education__form';
  const fields = useMemo(() => [
    Fields.educationForm.school,
    Fields.educationForm.degree,
    Fields.educationForm.startDate,
    Fields.educationForm.endDate,
    Fields.educationForm.location,
    //Buttons(),
  ], []);

  return useMemo(() => <DynamicForm props={props} id={id} fields={fields}></DynamicForm>, [fields, props]);
};
