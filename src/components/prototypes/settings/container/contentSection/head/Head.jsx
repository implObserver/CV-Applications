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
    if (props.forms[`${props.id}__form`].states.formStyle.getClass() === 'enabled' || props.id === 'personalDetails') {
      await FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(key);
    } else {
      await DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(key);
      await props.dropdownLists[`${props.id}__places`].states.containerRef.switchClass();
      props.states.buttonRef.switchClass();
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
