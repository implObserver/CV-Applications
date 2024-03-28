import { Props } from "../../../../../../../dataManagments/props/Global";
import { FieldsHandler } from "../../../../../../form/handlers/fieldsHandler/FieldsHandler";

export const FormAddButton = ({ id }) => {
  const props = Props.states[id];
  const style =
    props.states.buttonStyle.getState() === 'visible__button-wrapper'
      ? 'open__button'
      : 'close__button';

  const hundleClick = () => {
    props.activePlace = 'new';
    props.states.drawnNode.setState('form');
    const key = props.states.open.getState();
    FieldsHandler.changeVisibleFields(props, key);
  }

  return (
    <>
      <button
        className={`add__button ${style}`}
        onClick={hundleClick}
      >
        <span>+ {id}</span>
      </button>
    </>
  );
};
