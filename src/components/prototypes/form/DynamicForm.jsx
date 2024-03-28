import { State } from '../state/State';
import '../../../styles/Field.css'
import { ImaginaryField } from './field/imaginaryField/ImaginaryField';
import { generateKey } from '../../../helper/KeyGenerator';
import { Props } from '../../dataManagments/props/Global';

export const DynamicForm = ({ formId, fields, id }) => {
    const toggle = State(true, false);
    const props = Props.states[id];

    Object.assign(props.states, { formStyle: toggle });

    const fill = fields.map((field) => {
        return <ImaginaryField key={generateKey(field.id)} parameters={field} id={id}></ImaginaryField>;
    })

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
                    {fill}
                </ul>
            </form>
        </>
    );
};