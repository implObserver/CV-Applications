import { State } from '../state/State';
import '../../../styles/Field.css'
import { ImaginaryField } from './field/imaginaryField/ImaginaryField';
import { usePropsContext } from '../../dataManagments/context/PropsContext';
import { FieldParametersContext } from '../../dataManagments/context/FieldParametersContext';
import { generateKey } from '../../../helper/KeyGenerator';
import { FormHandlers } from '../handlerFabric/formHandlers/FormHandlers';
import { useEffect } from 'react';

export const DynamicForm = ({ formId, fields }) => {
    const toggle = State(true, false);
    const props = usePropsContext();
    Object.assign(props.states, { formStyle: toggle });
    props.functions.addForm(formId, ['unvisible__field']);
    Object.assign(props.forms[formId].states, { formStyle: toggle });
    FormHandlers.functions.addFieldsHandler(formId, props.forms[formId]);

    useEffect(() => {
        FormHandlers.fieldsHandlers[formId].switchVisible(true);
    }, [formId])

    const fill = () => {
        return fields.map((field) => {
            return (
                <FieldParametersContext.Provider key={generateKey(field.id)} value={{
                    formId: formId,
                    field: field,
                }} >
                    <ImaginaryField ></ImaginaryField>
                </FieldParametersContext.Provider>
            )
        })
    }

    return (
        <>
            <form
                className={`${toggle.getState() ? 'visible__form' : 'unvisible__form'} ${props.states.drawnNode.getState() === 'button' ? 'disabled' : ''}`}
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