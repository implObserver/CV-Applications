import { ResumeUpdater } from "../../../../dataManagments/stateTemplates/ResumeUpdater";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = ({ id, section }) => {
    Object.assign(ResumeUpdater[id], { [section.getKey()]: {} });
    return (
        <>
            <div className="resume__place">
                <LeftSection id={id} section={section}></LeftSection>
                <RightSection id={id} section={section}></RightSection>
            </div>
        </>
    )
}