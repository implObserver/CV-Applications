import { later } from '../../../helper/Timeout';
import { Arrow } from '../../arrow/Arrow';

export const Head = (name, props) => {
  const style = props.states.open.getState() ? 'open__head' : 'close__head';

  const hundleClick = async () => {
    props.states.open.switchState();
    if (props.states.drawnNode.getState() === 'form') {
      props.states.formStyle.switchState();
      switchVisibleFields();
    }
  }

  const switchVisibleFields = async () => {
    const fields = props.states.fieldsStyles;

    fields.get('school').switchState()

  }

  return (
    <>
      <button className={`section__head ${style}`}
        onClick={hundleClick}>
        <h2>{name}</h2>
        <Arrow state={props.states.open.getState()}></Arrow>
      </button>
    </>
  );
};
