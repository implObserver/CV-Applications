import { Cancel } from "./buttons/Cancel";
import { Delete } from "./buttons/Delete";
import { Save } from "./buttons/Save";

export const ButtonsWrapper = ({ props, parameters, id }) => {
    console.log(props)
    return (
        <>
            <li className={`${props.states.fieldsStyles[parameters.id].getState()} buttons`}>
                <Delete props={props} id={id}></Delete>
                <Save props={props} id={id}></Save>
                <Cancel props={props} id={id}></Cancel>
            </li>
        </>
    );
}