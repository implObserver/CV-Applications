import { useThisContext } from "../../../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { State } from "../../../../../state/State";

export const AddressField = () => {
    const updater = useThisContext();
    const section = useFieldContext();
    const udpate = State(section.getValues()[4]);

    Object.assign(updater, { location: udpate });

    return (
        <>
            <span className="address__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}