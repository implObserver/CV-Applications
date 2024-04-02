import { State } from '../state/State';
import '../../../styles/Field.css'
import { ImaginaryField } from './field/imaginaryField/ImaginaryField';
import { usePropsContext } from '../../dataManagments/context/PropsContext';
import { FieldParametersContext } from '../../dataManagments/context/FieldParametersContext';
import { generateKey } from '../../../helper/KeyGenerator';

export const DynamicForm = ({ formId, fields }) => {
    const toggle = State(true, false);
    const props = usePropsContext();
    Object.assign(props.states, { formStyle: toggle });

    const fill = () => {
        return fields.map((field) => {
            return (
                <FieldParametersContext.Provider key={generateKey(field.id)} value={field} >
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
                {(() => {
                    if (formId === 'details__form') {
                        return (
                            <>
                                <h2>Personal Details</h2>
                            </>
                        )
                    }
                })()}
                <ul>
                    {fill()}
                </ul>
            </form>
        </>
    );
};