import { Input } from '../input/Input';
import { State } from '../toggle/Toggle';

export const ImaginaryField = (label) => {
  const visibleState = State(
    'unvisible__field',
    'visible__field',
  );

  const getLabel = () => {
    return label;
  }

  const key = setKey(label);

  const changeVisible = () => {
    visibleState.switchState();
  };

  const getVisible = () => {
    return visibleState.getState();
  };

  const isVisible = () => {
    return visibleState.getState() === 'visible__field';
  };

  const getKey = () => {
    return key;
  };

  return { changeVisible, isVisible, getVisible, getKey, getLabel };
}

export const Field = (props) => {
  const prototype = ImaginaryField(props.label);
  const input = Input();

  const getValue = () => {
    return input.getValue()
  }

  const setValue = (value) => {
    input.setValue(value);
  }

  const render = () => (
    <>
      <label htmlFor={props.id}>
        {props.label}
        {(() => {
          if (props.isRequied) {
            return <span aria-label='required'>*</span>
          }
          if (props.isRecommended) {
            return <span className='recommended__text'> recommended</span>
          }
        })()}
      </label>

      {input.render(props)}

      <span className='error' aria-live='polite'></span>
    </>
  );

  return Object.assign(prototype, { render, getValue, setValue });
};

const setKey = (name) => {
  let key = '';
  for (let i = 0; i < name.length; i++) {
    key += name[i].charCodeAt();
  }
  return key;
};
