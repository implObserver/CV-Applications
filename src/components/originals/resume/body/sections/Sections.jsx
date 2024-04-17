import { appModel } from "../../../../../main";
import { State } from "../../../../prototypes/state/State"
import { ResumeEducation } from "./education/Section"
import { ResumeExperience } from "./experience/Section"

export const ResumeSections = () => {
    const update = State();
    Object.assign(appModel.resume.updater, { body: update });
    return (
        <>
            <div className="resume__sections">
                <ResumeEducation></ResumeEducation>
                <ResumeExperience></ResumeExperience>
            </div>
        </>
    )
}