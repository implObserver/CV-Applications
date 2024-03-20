import '../../../../../styles/ButtonWrapper.css';
import { State } from '../../../toggle/Toggle';
import { FormAddButton } from './button/Button';

export const ButtonWrapper = ({ props, name }) => {
  const style = State('unvisible__button-wrapper', 'visible__button-wrapper');
  Object.assign(props.states, { buttonStyle: style });
  return (
    <>
      <div className={`button__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
        <FormAddButton props={props} name={name}></FormAddButton>
      </div>
    </>
  );
};
