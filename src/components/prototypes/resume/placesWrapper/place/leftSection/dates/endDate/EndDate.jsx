import { appModel } from "../../../../../../../../main";
import { useFieldContext } from "../../../../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../../state/State";

export const EndDate = () => {
    const section = useFieldContext();
    const udpate = State(section.getValues()[3]);
    const props = usePropsContext();

    Object.assign(appModel.resume.updater[props.id][section.getKey()], { endDate: udpate });

    return (
        <>
            <span>{udpate.getState()}</span>
        </>
    )
}