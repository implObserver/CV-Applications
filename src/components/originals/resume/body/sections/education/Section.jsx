import { PropsContext } from "../../../../../dataManagments/context/PropsContext"
import { Props } from "../../../../../dataManagments/props/Global"
import { ResumeSection } from "../../../../../prototypes/resume/section/Section"

export const ResumeEducation = () => {
    return (
        <>
            <PropsContext.Provider value={Props.states.education}>
                <ResumeSection id='education'></ResumeSection>
            </PropsContext.Provider>
        </>
    )
}