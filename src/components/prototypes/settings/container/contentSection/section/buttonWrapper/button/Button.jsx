import { capitalizeFirstLetter } from "../../../../../../../../helper/stringHelper";
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
    const key = props.states.open.getState();
    FieldsHandler.changeVisibleFields(props, key);
    //PlacesHandler.changeVisiblePlaces(props, key);
    console.log(props)
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
