import { Props } from '../../../dataManagments/props/Global';
import { ImaginaryInput } from './input/imaginaryInput/ImaginaryInput';
import { ImaginaryLabel } from './label/imaginaryLabel/ImaginaryLabel';

export const Field = ({ parameters, id }) => {
  const props = Props.states[id];

  return (
    <>
      <li className={props.states.fieldsStyles[parameters.id].getState()}>
        <ImaginaryLabel parameters={parameters}></ImaginaryLabel>
        <ImaginaryInput parameters={parameters} id={id}></ImaginaryInput>
        <span className='error' aria-live='polite'></span>
      </li>
    </>
  );
};