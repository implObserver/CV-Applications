import { appModel } from "../../../../../../../main";
import { useFieldContext } from "../../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../state/State";

export const DescriptionField = () => {
    const section = useFieldContext();
    const udpate = State(section.getValues()[5]);
    const props = usePropsContext();

    Object.assign(appModel.resume.updater[props.id][section.getKey()], { description: udpate });

    return (
        <>
            <span className="description__field">
                <span>{udpate.getState()}</span>
            </span>
        </>
    )
}