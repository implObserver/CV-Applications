import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../../../dataManagments/props/Global";
import { State } from "../../../../../state/State";

export const AddressField = ({ section }) => {
    const udpate = State(section.getValues()[4]);
    const props = usePropsContext();

    Object.assign(Props.states.resumeUpdater[props.id][section.getKey()], { location: udpate });

    return (
        <>
            <span className="address__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}