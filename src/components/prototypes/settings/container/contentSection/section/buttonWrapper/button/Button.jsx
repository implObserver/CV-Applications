import { capitalizeFirstLetter } from "../../../../../../../../helper/StringHelper";
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { FieldsHandler } from "../../../../../../form/handlers/fieldsHandler/FieldsHandler";
import { PlacesHandler } from "../../handlers/PlacesHandler";

export const FormAddButton = () => {
  const props = usePropsContext();
  const style =
    props.states.buttonStyle.getState() === 'visible__button-wrapper'
      ? 'open__button'
      : 'close__button';

  const hundleClick = () => {
    props.objects.activePlace = 'new';
    props.states.placesStyle.switchState();
    props.states.buttonStyle.switchState();
    props.states.drawnNode.setState('form');
    PlacesHandler.fillOfPlaces(props, false)
    FieldsHandler.fillOfFields(props, true);
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
