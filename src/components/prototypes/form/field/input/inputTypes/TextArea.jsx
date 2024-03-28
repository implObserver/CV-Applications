import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Area = ({ parameters, id }) => {
    const value = State('');
    const props = Props.states[id];

    Object.assign(props.inputs, { [parameters.id]: value });

    const areaHandler = (e) => {
        Props.ResumeUpdater[props.id][props.activePlace.getKey()][parameters.index].setState(e.target.value);
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