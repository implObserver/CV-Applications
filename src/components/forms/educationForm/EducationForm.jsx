import { DynamicForm } from '../../prototypes/form/DynamicForm';
import Fields from '../../JSON/Fields.json'

const fields = [
  Fields.educationForm.school,
  Fields.educationForm.degree,
  Fields.educationForm.startDate,
  Fields.educationForm.endDate,
  Fields.educationForm.location,
  Fields.educationForm.buttons,
];

export const EducationForm = ({ props }) => {
  const id = 'education__form';
  return <DynamicForm props={props} id={id} fields={fields}></DynamicForm>;
};
