import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const PlaceField = () => {
    const section = useFieldContext();
    const udpate = State(section.getValues()[0]);
    const props = usePropsContext();
    
    Object.assign(Props.states.resumeUpdater[props.id][section.getKey()], { place: udpate });

    return (
        <>
            <span className="place__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}