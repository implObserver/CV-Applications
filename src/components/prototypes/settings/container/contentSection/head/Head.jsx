import { Props } from '../../../../../dataManagments/props/Global';
import { Arrow } from '../../../../details/arrow/Arrow';
import { FieldsHandler } from '../../../../form/handlers/fieldsHandler/FieldsHandler';
import { State } from '../../../../state/State';

export const Head = ({ id }) => {
  const props = Props.states[id];
  const style = State(false, true);
  const block = State('');

  Object.assign(props.states, { open: style, blockHead: block });

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
      <button className={`section__head ${block.getState()}`}
        onClick={hundleClick}>
        <h2>{id}</h2>
        <Arrow state={props.states.open.getState()}></Arrow>
      </button>
    </>
  );
};
