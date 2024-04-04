import { capitalizeFirstLetter } from '../../../../../../helper/StringHelper';
import { usePropsContext } from '../../../../../dataManagments/context/PropsContext';
import { Arrow } from '../../../../details/arrow/Arrow';
import { FieldsHandler } from '../../../../form/handlers/fieldsHandler/FieldsHandler';
import { State } from '../../../../state/State';
import { PlacesHandler } from '../section/handlers/PlacesHandler';

export const Head = () => {
  const props = usePropsContext();
  const style = State(false, true, props.defaultStates.open);

  Object.assign(props.states, { open: style });

  const hundleClick = async () => {
    const key = !props.states.open.getState();
    style.switchState();
    if (props.states.drawnNode.getState() === 'form') {
      FieldsHandler.fillOfFields(props, key);
    } else {
      PlacesHandler.fillOfPlaces(props, key)
      props.states.placesStyle.switchState();
      props.states.buttonStyle.switchState();
    }
  }

  return (
    <>
      <button className={`section__head`}
        onClick={hundleClick}>
        <h2>{capitalizeFirstLetter(props.id)}</h2>
        <Arrow state={props.states.open.getState()}></Arrow>
      </button>
    </>
  );
};
