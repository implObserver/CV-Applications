import { appModel } from "../../../../../../main"
import { PropsContext } from "../../../../../dataManagments/context/PropsContext"
import { ResumeSection } from "../../../../../prototypes/resume/section/Section"

export const ResumeEducation = () => {
    return (
        <>
            <PropsContext.Provider value={appModel.settings.container.sections.education}>
                <ResumeSection id='education'></ResumeSection>
            </PropsContext.Provider>
        </>
    )
}