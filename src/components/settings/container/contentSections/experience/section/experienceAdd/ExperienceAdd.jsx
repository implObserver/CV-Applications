import '../../../../../../../styles/ExperienceAdd.css'
import { ExperienceAddButton } from './button/Add'

export const ExperienceAdd = ({ setForm, status, form }) => {
    return (
        <>
            <div className={`experience__add`}>
                <ExperienceAddButton setForm={setForm} status={status} form={form}></ExperienceAddButton>
            </div>
        </>
    )
}