import { DetailsForm } from "../../../../../../originals/forms/detailsForm/DetailsForm"
import { EducationForm } from "../../../../../../originals/forms/educationForm/EducationForm"
import { ExperienceForm } from "../../../../../../originals/forms/experienceForm/ExperienceForm"

export const Form = ({ id }) => {
    return (
        <>
            {(() => {
                if (id === 'personalDetails') {
                    return <DetailsForm></DetailsForm>
                }
                if (id === 'education') {
                    return <EducationForm></EducationForm>
                }
                if (id === 'experience') {
                    return <ExperienceForm></ExperienceForm>
                }
            })()}
        </>
    )
}