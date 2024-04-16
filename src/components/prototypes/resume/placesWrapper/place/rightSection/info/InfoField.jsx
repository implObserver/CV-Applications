import { useThisContext } from "../../../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { State } from "../../../../../state/State";

export const InfoField = () => {
    const updater = useThisContext();
    const section = useFieldContext();
    const udpate = State(section.getValues()[1]);

    Object.assign(updater, { info: udpate });

    return (
        <>
            <span className="info__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}