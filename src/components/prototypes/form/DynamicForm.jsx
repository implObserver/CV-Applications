import { State } from '../toggle/Toggle';
import { generateKey } from '../../helper/KeyGenerator';
import '../../../styles/Field.css'
import { ImaginaryField } from './field/ImaginaryField';

export const DynamicForm = ({ props, id, fields }) => {
    const toggle = State(true, false);
    Object.assign(props.states, { formStyle: toggle });
    const fill = fields.map((field) => {
        return <ImaginaryField key={generateKey(field.id)} props={props} parameters={field} id={id}></ImaginaryField>;
    })

    return (
        <>
            <form
                className={`${toggle.getState() ? 'visible__form' : 'unvisible__form'} ${props.states.drawnNode.getState() === 'button' ? 'disabled' : ''}`}
                id={id}
                action='#'
                method='post'
            >
                {(() => {
                    if (id === 'details__form') {
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