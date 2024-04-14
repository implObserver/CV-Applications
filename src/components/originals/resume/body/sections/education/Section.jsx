import { appModel } from "../../../../../../main"
import { PropsContext } from "../../../../../dataManagments/context/PropsContext"
import { ResumeSection } from "../../../../../prototypes/resume/section/Section"

export const ResumeEducation = () => {
    const section = appModel.settings.container.sections.education;
    
    return (
        <>
            <PropsContext.Provider value={section}>
                <ResumeSection id='education'></ResumeSection>
            </PropsContext.Provider>
        </>
    )
}