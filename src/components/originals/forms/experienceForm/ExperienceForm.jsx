import { DynamicForm } from '../../../prototypes/form/DynamicForm';
import Fields from '../../../dataManagments/JSON/Fields.json'

const fields = [
  Fields.experienceForm.companyName,
  Fields.experienceForm.positionTitle,
  Fields.experienceForm.startDate,
  Fields.experienceForm.endDate,
  Fields.experienceForm.location,
  Fields.experienceForm.description,
  Fields.experienceForm.buttons,
];

export const ExperienceForm = () => {
  const formId = 'experience__form';
  return <DynamicForm formId={formId} fields={fields}></DynamicForm>;
};
