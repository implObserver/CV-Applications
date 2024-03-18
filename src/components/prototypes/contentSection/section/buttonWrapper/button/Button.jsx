import { FieldHandler } from "../../../../form/DynamicForm";

export const FormAddButton = ({ props, name }) => {
  const style = props.states.open.getState() ? 'open__button' : 'close__button';

  const hundleClick = () => {
    props.states.drawnNode.setState('form');
    const fieldHandler = FieldHandler();
    fieldHandler.addFields(props);
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
