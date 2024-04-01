import { capitalizeFirstLetter } from '../../../../../../helper/stringHelper';
import { usePropsContext } from '../../../../../dataManagments/context/PropsContext';
import { Arrow } from '../../../../details/arrow/Arrow';
import { FieldsHandler } from '../../../../form/handlers/fieldsHandler/FieldsHandler';
import { State } from '../../../../state/State';

export const Head = () => {
  const props = usePropsContext();
  const style = State(false, true, props.defaultStates.open);

  Object.assign(props.states, { open: style });

  const hundleClick = async () => {
    style.switchState();
    if (props.states.drawnNode.getState() === 'form') {
      const key = !props.states.open.getState();
      FieldsHandler.changeVisibleFields(props, key);
    } else {
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
