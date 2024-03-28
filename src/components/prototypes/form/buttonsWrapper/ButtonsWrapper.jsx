import { Props } from "../../../dataManagments/props/Global";
import { Cancel } from "./buttons/Cancel";
import { Delete } from "./buttons/Delete";
import { Save } from "./buttons/Save";

export const ButtonsWrapper = ({ parameters, id }) => {
    const props = Props.states[id];
    console.log(props)
    return (
        <>
            <li className={`${props.states.fieldsStyles[parameters.id].getState()} buttons`}>
                <Delete id={id}></Delete>
                <Save id={id}></Save>
                <Cancel id={id}></Cancel>
            </li>
        </>
    );
}