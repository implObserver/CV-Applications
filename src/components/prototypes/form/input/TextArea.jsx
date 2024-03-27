import { ResumeUpdater } from "../../../resume/ResumeUpdater";
import { State } from "../../toggle/Toggle";

export const Area = ({ props, parameters }) => {
    const value = State('');
    Object.assign(props.inputs, { [parameters.id]: value });

    const areaHandler = (e) => {
        ResumeUpdater[props.id][props.activePlace.getKey()][parameters.index].setState(e.target.value);
        value.setState(e.target.value);
    }

    return (
        <>
            <textarea
                id={parameters.id}
                name={parameters.name}
                className='field'
                placeholder={parameters.placeholder}
                value={value.getState()} onInput={areaHandler}
            />
        </>
    );
}