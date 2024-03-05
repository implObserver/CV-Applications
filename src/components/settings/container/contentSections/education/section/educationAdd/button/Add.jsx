import '../../../../../../../../styles/EducationAddButton.css'

export const EducationAddButton = ({ setForm, status }) => {
    return (
        <>
            <button className={`education__add__button ${status}`}
                onClick={setForm}>
                <span>+ Education</span>
            </button>
        </>
    )
}