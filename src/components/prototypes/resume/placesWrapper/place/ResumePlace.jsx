import { LeftSection } from "./leftSection/LeftSection"
import { RightSection } from "./rightSection/RightSection"

export const ResumePlace = ({ id }) => {
    return (
        <>
            <div className="resume__place">
                <LeftSection></LeftSection>
                <RightSection id={id}></RightSection>
            </div>
        </>
    )
}