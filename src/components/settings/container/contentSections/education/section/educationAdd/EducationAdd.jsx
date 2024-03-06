import '../../../../../../../styles/EducationAdd.css'
import { EducationAddButton } from './button/Add'

export const EducationAdd = ({ setForm, status, form }) => {
    return (
        <>
            <div className={`education__add`}>
                <EducationAddButton setForm={setForm} status={status} form={form}></EducationAddButton>
            </div>
        </>
    )
}