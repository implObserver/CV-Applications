import { DynamicForm } from "../../../prototypes/form/DynamicForm";
import Fields from '../../../dataManagments/JSON/Fields.json'

const fields = [
  Fields.detailsForm.fullName,
  Fields.detailsForm.email,
  Fields.detailsForm.phoneNumber,
  Fields.detailsForm.address,
];

export const DetailsForm = ({ props }) => {
  const id = 'details__form';

  return <DynamicForm props={props} id={id} fields={fields}></DynamicForm>;
};
