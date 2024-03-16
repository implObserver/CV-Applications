import { DynamicForm } from "../../prototypes/form/DynamicForm";
import Fields from '../../JSON/Fields.json'

export const DetailsForm = ({ props }) => {
  const id = 'details__form';

  const fields = [
    Fields.detailsForm.fullName,
    Fields.detailsForm.email,
    Fields.detailsForm.phoneNumber,
    Fields.detailsForm.address,
  ];

  return <DynamicForm props={props} id={id} fields={fields}></DynamicForm>;
};
