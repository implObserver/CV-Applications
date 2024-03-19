import { Cancel } from "./buttons/Cancel";
import { Delete } from "./buttons/Delete";
import { Save } from "./buttons/Save";

export const ButtonsWrapper = ({ props, parameters }) => {
    return (
        <>
            <li className={`${props.states.fieldsStyles[parameters.id].getState()} buttons`}>
                <Delete></Delete>
                <Save></Save>
                <Cancel></Cancel>
            </li>
        </>
    );
}