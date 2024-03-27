import { ResumeUpdater } from "../../../../resume/ResumeUpdater";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = ({ id, props, section }) => {
    Object.assign(ResumeUpdater[id], { [section.getKey()]: {} });
    return (
        <>
            <div className="resume__place">
                <LeftSection id={id} props={props} section={section}></LeftSection>
                <RightSection id={id} props={props} section={section}></RightSection>
            </div>
        </>
    )
}