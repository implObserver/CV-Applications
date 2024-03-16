import '../../../../../styles/ButtonWrapper.css';
import { FormAddButton } from './button/Button';

export const ButtonWrapper = ({ props, name }) => {
  const style = props.states.open.getState() ? 'visible__button-wrapper' : 'unvisible__button-wrapper';
  return (
    <>
      <div className={`button__wrapper ${style} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
        <FormAddButton props={props} name={name}></FormAddButton>
      </div>
    </>
  );
};
