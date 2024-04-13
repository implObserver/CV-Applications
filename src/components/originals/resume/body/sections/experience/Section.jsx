import { appModel } from "../../../../../../main"
import { PropsContext } from "../../../../../dataManagments/context/PropsContext"
import { ResumeSection } from "../../../../../prototypes/resume/section/Section"

export const ResumeExperience = () => {
    return (
        <>
            <PropsContext.Provider value={appModel.settings.container.sections.experience}>
                <ResumeSection id='experience'></ResumeSection>
            </PropsContext.Provider>
        </>
    )
}