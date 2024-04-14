import { useFieldContext } from '../../../dataManagments/context/FieldParametersContext';
import { usePropsContext } from '../../../dataManagments/context/PropsContext';
import { ImaginaryInput } from './input/imaginaryInput/ImaginaryInput';
import { ImaginaryLabel } from './label/imaginaryLabel/ImaginaryLabel';

export const Field = () => {
  const props = usePropsContext();
  const parameters = useFieldContext();
  return (
    <>
      <li ref={props.forms[parameters.formId].objects.fieldsRefs[parameters.field.id].getRef()}>
        <ImaginaryLabel></ImaginaryLabel>
        <ImaginaryInput></ImaginaryInput>
        <span className='error' aria-live='polite'></span>
      </li>
    </>
  );
};