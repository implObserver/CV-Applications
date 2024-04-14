import { appModel } from "../../../../../../main"
import { PropsContext } from "../../../../../dataManagments/context/PropsContext"
import { ResumeSection } from "../../../../../prototypes/resume/section/Section"

export const ResumeExperience = () => {
    const section = appModel.settings.container.sections.experience;
    
    return (
        <>
            <PropsContext.Provider value={section}>
                <ResumeSection id='experience'></ResumeSection>
            </PropsContext.Provider>
        </>
    )
}