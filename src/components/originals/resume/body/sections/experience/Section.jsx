import { PropsContext } from "../../../../../dataManagments/context/PropsContext"
import { Props } from "../../../../../dataManagments/props/Global"
import { ResumeSection } from "../../../../../prototypes/resume/section/Section"

export const ResumeExperience = () => {
    return (
        <>
            <PropsContext.Provider value={Props.states.experience}>
                <ResumeSection id='experience'></ResumeSection>
            </PropsContext.Provider>
        </>
    )
}