import { useThisContext } from "../../../../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../../../../dataManagments/context/FieldParametersContext";
import { State } from "../../../../../../state/State";

export const StartDate = () => {
    const updater = useThisContext();
    const section = useFieldContext();
    const udpate = State(section.getValues()[2]);

    Object.assign(updater, { startDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}