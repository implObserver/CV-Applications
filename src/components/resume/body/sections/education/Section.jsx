import { generateKey } from "../../../../helper/KeyGenerator";
import { ResumeSection } from "../../../../prototypes/resume/section/Section"

export const ResumeEducation = ({ props }) => {
    return (
        <>
            <ResumeSection id='education' props={props}></ResumeSection>
        </>
    )
}