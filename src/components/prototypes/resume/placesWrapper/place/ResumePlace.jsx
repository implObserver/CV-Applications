import { usePropsContext } from "../../../../dataManagments/context/PropsContext";
import { Props } from "../../../../dataManagments/props/Global";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = ({ section }) => {
    const props = usePropsContext();
    Object.assign(Props.states.resumeUpdater[props.id], { [section.getKey()]: {} });

    return (
        <>
            <div className="resume__place">
                <LeftSection section={section}></LeftSection>
                <RightSection section={section}></RightSection>
            </div>
        </>
    )
}