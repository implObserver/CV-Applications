import { DynamicForm } from '../../../prototypes/form/DynamicForm';
import Fields from '../../../dataManagments/JSON/Fields.json'

const fields = [
  Fields.educationForm.school,
  Fields.educationForm.degree,
  Fields.educationForm.startDate,
  Fields.educationForm.endDate,
  Fields.educationForm.location,
  Fields.educationForm.buttons,
];

export const EducationForm = ({ props, id }) => {
  const formId = 'education__form';
  return <DynamicForm props={props} formId={formId} fields={fields} id={id}></DynamicForm>;
};
