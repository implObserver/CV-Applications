import { useFieldContext } from "../../../../dataManagments/context/FieldParametersContext";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../dataManagments/props/Global";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = () => {
    const props = usePropsContext();
    const section = useFieldContext();
    Object.assign(Props.states.resumeUpdater[props.id], { [section.getKey()]: {} });

    return (
        <>
            <div className="resume__place">
                <LeftSection></LeftSection>
                <RightSection></RightSection>
            </div>
        </>
    )
}