import { capitalizeFirstLetter } from '../../../../../../helper/StringHelper';
import { usePropsContext } from '../../../../../dataManagments/context/PropsContext';
import { Arrow } from '../../../../details/arrow/Arrow';
import { DropdownListsHandlers } from '../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers';
import { FormHandlers } from '../../../../handlerFabric/formHandlers/FormHandlers';
import { State } from '../../../../state/State';

export const Head = () => {
  const props = usePropsContext();

  if (props.id === 'personalDetails') {
    props.defaultStates.open.value = true
  }

  const style = State(false, true, props.defaultStates.open);

  Object.assign(props.states, { open: style });

  const hundleClick = async () => {
    const key = !props.states.open.getState();
    style.switchState();
    if (props.activeElement === 'place') {
      DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(key);
      props.states.buttonStyle.switchState();
    } else {
      FormHandlers.fieldsHandlers[`${props.id}__form`].switchVisible(key);
    }


  }

  return (
    <>
      <button className={`section__head`} onClick={hundleClick}>
        <h2>{capitalizeFirstLetter(props.id)}</h2>
        <Arrow state={props.states.open.getState()}></Arrow>
      </button>
    </>
  );
};
