import { capitalizeFirstLetter } from "../../../../../../../../helper/StringHelper";
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from "../../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../../../../handlerFabric/formHandlers/FormHandlers";

export const FormAddButton = () => {
  const props = usePropsContext();

  const hundleClick = async () => {
    props.dropdownLists[`${props.id}__places`].objects.activeElement = 'new';
    await DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(false);
    props.dropdownLists[`${props.id}__places`].states.containerRef.switchClass();
    props.states.buttonRef.switchClass();
    props.forms[`${props.id}__form`].states.formStyle.switchClass();
    FormHandlers.fieldsHandlers[`${props.id}__form`].switchVisible(true);
  }

  return (
    <>
      <button
        className={`add__button`}
        onClick={hundleClick}
      >
        <span>+ {capitalizeFirstLetter(props.id)}</span>
      </button>
    </>
  );
};
