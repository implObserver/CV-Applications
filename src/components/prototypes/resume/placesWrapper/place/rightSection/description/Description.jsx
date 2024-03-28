import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const DescriptionField = ({ section }) => {
    const udpate = State(section.getValues()[5]);
    const props = usePropsContext();

    Object.assign(Props.states.resumeUpdater[props.id][section.getKey()], { description: udpate });

    return (
        <>
            <span className="description__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}