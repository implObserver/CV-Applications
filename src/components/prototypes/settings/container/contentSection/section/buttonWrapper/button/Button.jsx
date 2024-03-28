import { FieldsHandler } from "../../../../../../form/fieldsHandler/FieldsHandler";

export const FormAddButton = ({ props, name }) => {
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
        <span>+ {name}</span>
      </button>
    </>
  );
};
