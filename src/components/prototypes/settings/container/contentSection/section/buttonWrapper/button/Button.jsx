import { capitalizeFirstLetter } from "../../../../../../../../helper/StringHelper";
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from "../../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { FormHandlers } from "../../../../../../handlerFabric/formHandlers/FormHandlers";

export const FormAddButton = () => {
  const props = usePropsContext();
  const list = props.dropdownLists[`${props.id}__places`];
  const placeshandler = DropdownListsHandlers.placesHandlers[`${props.id}__places`];
  const fieldshandler = FormHandlers.fieldsHandlers[`${props.id}__form`];

  const hundleClick = async () => {
    props.activeElement = 'form';
    list.objects.activeElement = 'new';
    await placeshandler.switchVisible(false);
    list.states.containerStyle.switchState();
    props.states.buttonStyle.switchState();
    fieldshandler.switchVisible(true);
  }

  return (
    <>
      <button className={`add__button`} onClick={hundleClick}>
        <span>+ {capitalizeFirstLetter(props.id)}</span>
      </button>
    </>
  );
};
