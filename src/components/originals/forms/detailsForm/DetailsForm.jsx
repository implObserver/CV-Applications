import { DynamicForm } from "../../../prototypes/form/DynamicForm";
import Fields from '../../../dataManagments/JSON/Fields.json'

const fields = [
  Fields.detailsForm.fullName,
  Fields.detailsForm.email,
  Fields.detailsForm.phoneNumber,
  Fields.detailsForm.address,
];

export const DetailsForm = () => {
  const formId = 'details__form';

  return <DynamicForm formId={formId} fields={fields}></DynamicForm>;
};
