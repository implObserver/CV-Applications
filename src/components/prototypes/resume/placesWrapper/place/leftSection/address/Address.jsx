import { appModel } from "../../../../../../../main";
import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../state/State";

export const AddressField = () => {
    const section = useFieldContext();
    const udpate = State(section.getValues()[4]);
    const props = usePropsContext();

    Object.assign(appModel.resume.updater[props.id][section.getKey()], { location: udpate });

    return (
        <>
            <span className="address__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}