import '../../../../../../../styles/ButtonWrapper.css';
import { usePropsContext } from '../../../../../../dataManagments/context/PropsContext';
import { State } from '../../../../../state/State';
import { FormAddButton } from './button/Button';

export const ButtonWrapper = ({ id }) => {
  const style = State('unvisible__button-wrapper', 'visible__button-wrapper');
  const props = usePropsContext();

  Object.assign(props.states, { buttonStyle: style });

  return (
    <>
      <div className={`button__wrapper ${style.getState()} ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
        <FormAddButton id={id}></FormAddButton>
      </div>
    </>
  );
};
