import { useFieldContext } from "../../../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../../../dataManagments/props/Global";
import { State } from "../../../../../../state/State";

export const StartDate = () => {
    const section = useFieldContext();
    const udpate = State(section.getValues()[2]);
    const props = usePropsContext();

    Object.assign(Props.states.resumeUpdater[props.id][section.getKey()], { startDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}