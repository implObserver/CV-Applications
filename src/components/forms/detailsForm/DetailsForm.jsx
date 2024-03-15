import { DynamicForm } from "../../prototypes/form/DynamicForm";
import { Address } from "./fields/Address";
import { Email } from "./fields/Email";
import { FullName } from "./fields/FullName";
import { PhoneNumber } from "./fields/PhoneNumber";

export const DetailsForm = () => {
  const id = 'details__form';

  const fields = [
    FullName(id),
    Email(id),
    PhoneNumber(id),
    Address(id),
  ];

  const prototype = DynamicForm(id, fields);

  return Object.assign(prototype);
};
