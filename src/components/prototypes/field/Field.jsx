import { Toggle } from '../toggle/Toggle';

export const Field = (name) => {
  const visibleState = Toggle(
    'unvisible__field',
    'visible__field',
  );

  const key = setKey(name);

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

  return { changeVisible, isVisible, getVisible, getKey };
};

const setKey = (name) => {
  let key = '';
  for (let i = 0; i < name.length; i++) {
    key += name[i].charCodeAt();
  }
  return key;
};
