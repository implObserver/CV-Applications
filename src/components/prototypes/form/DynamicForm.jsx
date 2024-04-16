import '../../../styles/Field.css'
import { ImaginaryField } from './field/imaginaryField/ImaginaryField';
import { usePropsContext } from '../../dataManagments/context/PropsContext';
import { FieldParametersContext } from '../../dataManagments/context/FieldParametersContext';
import { generateKey } from '../../../helper/KeyGenerator';
import { FormHandlers } from '../handlerFabric/formHandlers/FormHandlers';

export const DynamicForm = ({ formId, fields }) => {
    const props = usePropsContext();
    FormHandlers.functions.addFieldsHandler(formId, props.forms[formId]);
   
    const fill = () => {
        return fields.map((field) => {
            return (
                <FieldParametersContext.Provider
                    key={generateKey(field.id)}
                    value={{ formId, field }} >
                    <ImaginaryField></ImaginaryField>
                </FieldParametersContext.Provider>
            )
        })
    }

    return (
        <>
            <form
                className={`visible__form`}
                id={formId}
                action='#'
                method='post'
            >
                <ul>
                    {fill()}
                </ul>
            </form>
        </>
    );
};