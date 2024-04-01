import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../dataManagments/props/Global";
import { State } from "../../../../state/State";

export const Area = () => {
    const value = State('');
    const props = usePropsContext();
    const parameters = useFieldContext();

    Object.assign(props.objects.inputs, { [parameters.id]: value });

    const areaHandler = (e) => {
        if (props.objects.activePlace !== 'new') {
            Props.states.resumeUpdater[props.id][props.objects.activePlace.getKey()][parameters.index].setState(e.target.value);
        }
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