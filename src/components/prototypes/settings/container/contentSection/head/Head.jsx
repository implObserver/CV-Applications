import { capitalizeFirstLetter } from '../../../../../../helper/StringHelper';
import { usePropsContext } from '../../../../../dataManagments/context/PropsContext';
import { Arrow } from '../../../../details/arrow/Arrow';
import { DropdownListsHandlers } from '../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers';
import { FormHandlers } from '../../../../handlerFabric/formHandlers/FormHandlers';
import { State } from '../../../../state/State';

export const Head = () => {
  const props = usePropsContext();
  const defaultState = props.id === 'personalDetails' ? props.defaultStates.personalOpen : props.defaultStates.open;
  const style = State(false, true, defaultState);

  Object.assign(props.states, { open: style });

  const hundleClick = async () => {
    const key = !props.states.open.getState();
    style.switchState();
    if (props.states.drawnNode.getState() === 'form' || props.id === 'personalDetails') {
      await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(key);
    } else {
      await DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(key);
      props.dropdownLists[`${props.id}__places`].states.elementsStyle.switchState();
      props.states.buttonStyle.switchState();
    }
    console.log(`STOOOOOOOOOOOOOOOOOOOOOOOOOP`)
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
