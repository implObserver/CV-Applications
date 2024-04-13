import { capitalizeFirstLetter } from "../../../../../../../../helper/StringHelper";
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from "../../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers";

export const FormAddButton = () => {
  const props = usePropsContext();
  const style =
    props.states.buttonStyle.getState() === 'visible__button-wrapper'
      ? 'open__button'
      : 'close__button';

  const hundleClick = async () => {
    props.dropdownLists[`${props.id}__places`].objects.activeElement = 'new';
    await DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(false);
    props.states.drawnNode.setState('form');
  }

  return (
    <>
      <button
        className={`add__button ${style}`}
        onClick={hundleClick}
      >
        <span>+ {capitalizeFirstLetter(props.id)}</span>
      </button>
    </>
  );
};
