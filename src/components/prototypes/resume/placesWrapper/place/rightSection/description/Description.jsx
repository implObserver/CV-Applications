import { useThisContext } from "../../../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { State } from "../../../../../state/State";

export const DescriptionField = () => {
    const updater = useThisContext();
    const section = useFieldContext();
    const udpate = State(section.getValues()[5]);

    Object.assign(updater, { description: udpate });

    return (
        <>
            <span className="description__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}