import '../../../../../../../styles/EducationAdd.css'
import { EducationAddButton } from './button/Add'

export const EducationAdd = ({ setForm, status }) => {
    return (
        <>
            <button className={`education__add`}>
                <EducationAddButton setForm={setForm} status={status}></EducationAddButton>
            </button>
        </>
    )
}