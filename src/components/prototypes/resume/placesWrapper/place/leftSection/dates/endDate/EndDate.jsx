import { useThisContext } from "../../../../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../../../../dataManagments/context/FieldParametersContext";
import { State } from "../../../../../../state/State";

export const EndDate = () => {
    const updater = useThisContext();
    const section = useFieldContext();
    const udpate = State(section.getValues()[3]);

    Object.assign(updater, { endDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}