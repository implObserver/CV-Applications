import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext"
import { DetailsForm } from "../../../../../../../originals/forms/detailsForm/DetailsForm"
import { EducationForm } from "../../../../../../../originals/forms/educationForm/EducationForm"
import { ExperienceForm } from "../../../../../../../originals/forms/experienceForm/ExperienceForm"

export const Form = () => {
    const context = usePropsContext();
    return (
        <>
            {(() => {
                if (context.id === 'personalDetails') {
                    return <DetailsForm></DetailsForm>
                }
                if (context.id === 'education') {
                    return <EducationForm></EducationForm>
                }
                if (context.id === 'experience') {
                    return <ExperienceForm></ExperienceForm>
                }
            })()}
        </>
    )
}