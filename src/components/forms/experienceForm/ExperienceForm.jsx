import { DynamicForm } from '../../prototypes/form/DynamicForm';
import Fields from '../../JSON/Fields.json'

const fields = [
  Fields.experienceForm.companyName,
  Fields.experienceForm.positionTitle,
  Fields.experienceForm.startDate,
  Fields.experienceForm.endDate,
  Fields.experienceForm.location,
  Fields.experienceForm.description,
  Fields.experienceForm.buttons,
];

export const ExperienceForm = ({ props }) => {
  const id = 'experience__form';
  return <DynamicForm props={props} id={id} fields={fields}></DynamicForm>;
};
