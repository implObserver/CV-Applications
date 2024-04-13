import { appModel } from "../../../../../main";
import { useFieldContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = () => {
    const props = usePropsContext();
    const section = useFieldContext();
    Object.assign(appModel.resume.updater[props.id], { [section.getKey()]: {} });

    return (
        <>
            <div className="resume__place">
                <LeftSection></LeftSection>
                <RightSection></RightSection>
            </div>
        </>
    )
}