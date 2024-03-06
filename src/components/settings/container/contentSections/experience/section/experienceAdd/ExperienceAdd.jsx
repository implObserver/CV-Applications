import '../../../../../../../styles/ExperienceAdd.css'
import { ExperienceAddButton } from './button/Add'

export const ExperienceAdd = ({ status }) => {
    return (
        <>
            <div className={`experience__add`}>
                <ExperienceAddButton status={status}></ExperienceAddButton>
            </div>
        </>
    )
}