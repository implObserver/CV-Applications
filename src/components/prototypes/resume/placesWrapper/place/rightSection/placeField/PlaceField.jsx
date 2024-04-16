import { useThisContext } from "../../../../../../dataManagments/context/Context";
import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { State } from "../../../../../state/State";

export const PlaceField = () => {
    const updater = useThisContext();
    const section = useFieldContext();
    const udpate = State(section.getValues()[0]);


    Object.assign(updater, { place: udpate });

    return (
        <>
            <span className="place__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}