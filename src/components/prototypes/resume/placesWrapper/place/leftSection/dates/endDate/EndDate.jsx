import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../../../dataManagments/props/Global";
import { State } from "../../../../../../state/State";

export const EndDate = ({ section }) => {
    const udpate = State(section.getValues()[3]);
    const props = usePropsContext();

    Object.assign(Props.states.resumeUpdater[props.id][section.getKey()], { endDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}