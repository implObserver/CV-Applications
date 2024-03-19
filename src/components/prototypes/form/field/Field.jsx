import { Input } from '../input/Input';

export const Field = ({ props, parameters }) => {
  return (
    <>
      <li className={props.states.fieldsStyles[parameters.id].getState()}>
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

        <Input props={props} parameters={parameters}></Input>

        <span className='error' aria-live='polite'></span>
      </li>
    </>
  );
};