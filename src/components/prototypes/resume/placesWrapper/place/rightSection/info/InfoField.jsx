import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const InfoField = () => {
    const section = useFieldContext();
    const udpate = State(section.getValues()[1]);
    const props = usePropsContext();

    Object.assign(Props.states.resumeUpdater[props.id][section.getKey()], { info: udpate });

    return (
        <>
            <span className="info__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}