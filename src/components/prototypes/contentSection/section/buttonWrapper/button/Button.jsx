import { FieldsHandler } from "../../../../form/fieldsHandler/FieldsHandler";

export const FormAddButton = ({ props, name }) => {
  const style = props.states.open.getState() ? 'open__button' : 'close__button';
  const hundleClick = () => {
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
