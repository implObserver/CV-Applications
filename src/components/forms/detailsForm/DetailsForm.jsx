import { DynamicForm } from "../../prototypes/form/DynamicForm";
import { Address } from "./fields/Address";
import { Email } from "./fields/Email";
import { FullName } from "./fields/FullName";
import { PhoneNumber } from "./fields/PhoneNumber";

export const DetailsForm = () => {
  const fields = [
    FullName(),
    Email(),
    PhoneNumber(),
    Address(),
  ];

  const prototype = DynamicForm('details__form', fields);



  return Object.assign(prototype);
};
