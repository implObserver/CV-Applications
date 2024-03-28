import { ResumeEducation } from "./education/Section"
import { ResumeExperience } from "./experience/Section"

export const ResumeSections = () => {
    return (
        <>
            <div className="resume__sections">
                <ResumeEducation></ResumeEducation>
                <ResumeExperience></ResumeExperience>
            </div>
        </>
    )
}