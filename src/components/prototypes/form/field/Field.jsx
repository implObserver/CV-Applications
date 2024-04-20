import { useFieldContext } from '../../../dataManagments/context/FieldParametersContext';
import { usePropsContext } from '../../../dataManagments/context/PropsContext';
import { ImaginaryInput } from './input/imaginaryInput/ImaginaryInput';
import { ImaginaryLabel } from './label/imaginaryLabel/ImaginaryLabel';

export const Field = () => {
  const props = usePropsContext();
  const parameters = useFieldContext();
  const state = props.forms[parameters.formId].objects.fieldsStyles[parameters.field.id].getState();

  return (
    <>
      <li
        className={`${state}`}>
        <ImaginaryLabel></ImaginaryLabel>
        <ImaginaryInput></ImaginaryInput>
        <span
          className='error'
          aria-live='polite'
        >
        </span>
      </li>
    </>
  );
};