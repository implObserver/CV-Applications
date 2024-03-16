export const FormAddButton = ({ props, name }) => {
  const style = props.states.open.getState() ? 'open__button' : 'close__button';

  const hundleClick = () => {
    props.states.drawnNode.setState('form');
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
