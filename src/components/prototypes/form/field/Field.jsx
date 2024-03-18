import { Input } from '../input/Input';
import { State } from '../../toggle/Toggle';
import { useEffect, useMemo } from 'react';

/*export const ImaginaryField = (label) => {
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

      <span className='error' aria-live='polite'></span>
    </>
  );

  return Object.assign(prototype, { render, getValue, setValue });
};

export const generateKey = (pre) => {
  const time = new Date().getTime();
  return `${pre}_${time}`;
}

const setKey = (name) => {
  let key = '';
  for (let i = 0; i < name.length; i++) {
    key += name[i].charCodeAt();
  }
  return key;
};*/


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

export const Field = ({ props, parameters, id }) => {
  const style = id === 'details__form' ? State('visible__field', 'unvisible__field')
    : State('unvisible__field', 'visible__field');

  Object.assign(props.states.fieldsStyles, { [parameters.id]: style });

  return (
    <>
      <li className={style.getState()}>
        <label htmlFor={parameters.id}>
          {parameters.label}
          {(() => {
            if (parameters.isRequied) {
              return <span aria-label='required'>*</span>
            }
            if (parameters.isRecommended) {
              return <span className='recommended__text'> recommended</span>
            }
          })()}
        </label>

        <Input props={parameters}></Input>

        <span className='error' aria-live='polite'></span>
      </li>
    </>
  );
};

export const generateKey = (pre) => {
  const time = new Date().getTime();
  return `${pre}_${time}`;
}

const setKey = (name) => {
  let key = '';
  for (let i = 0; i < name.length; i++) {
    key += name[i].charCodeAt();
  }
  return key;
};
