import { ImaginaryInput } from './imaginaryInput/ImaginaryInput';
import { ImaginaryLabel } from './imaginaryLabel/ImaginaryLabel';

export const Field = ({ props, parameters, id }) => {
  return (
    <>
      <li className={props.states.fieldsStyles[parameters.id].getState()}>
        <ImaginaryLabel parameters={parameters}></ImaginaryLabel>
        <ImaginaryInput props={props} parameters={parameters} id={id}></ImaginaryInput>
        <span className='error' aria-live='polite'></span>
      </li>
    </>
  );
};