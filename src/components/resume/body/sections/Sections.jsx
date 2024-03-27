import { ResumeEducation } from "./education/Section"
import { ResumeExperience } from "./experience/Section"

export const ResumeSections = ({ props }) => {
    return (
        <>
            <div className="resume__sections">
                <ResumeEducation props={props}></ResumeEducation>
                <ResumeExperience props={props}></ResumeExperience>
            </div>
        </>
    )
}