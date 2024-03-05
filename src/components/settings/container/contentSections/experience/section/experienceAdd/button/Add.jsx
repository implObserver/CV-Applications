import '../../../../../../../../styles/ExperienceAddButton.css'

export const ExperienceAddButton = ({ status }) => {
    return (
        <>
            <button className={`experience__add__button ${status}`}>
                <span>+ Experience</span>
            </button>
        </>
    )
}