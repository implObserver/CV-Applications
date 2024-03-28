import { Props } from "../../../../dataManagments/props/Global";
import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = ({ id, section }) => {
    console.log(id)
    
    Object.assign(Props.states.resumeUpdater[id], { [section.getKey()]: {} });

    return (
        <>
            <div className="resume__place">
                <LeftSection id={id} section={section}></LeftSection>
                <RightSection id={id} section={section}></RightSection>
            </div>
        </>
    )
}