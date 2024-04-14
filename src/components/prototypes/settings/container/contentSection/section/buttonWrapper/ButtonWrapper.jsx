import '../../../../../../../styles/ButtonWrapper.css';
import { usePropsContext } from '../../../../../../dataManagments/context/PropsContext';
import { Ref } from '../../../../../ref/Ref';
import { FormAddButton } from './button/Button';

export const ButtonWrapper = () => {
  const props = usePropsContext();
  const ref = Ref(['unvisible__button-wrapper', 'visible__button-wrapper']);
  Object.assign(props.states, { buttonRef: ref });

  return (
    <>
      <div ref={ref.getRef()} className={`button__wrapper unvisible__button-wrapper ${props.states.drawnNode.getState() === 'form' ? 'disabled' : ''}`}>
        <FormAddButton></FormAddButton>
      </div>
    </>
  );
};
