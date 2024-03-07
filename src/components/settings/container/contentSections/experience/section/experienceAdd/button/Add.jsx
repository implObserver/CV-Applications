export const ExperienceAddButton = ({ status }) => {
    return (
        <>
            <button className={`experience__add__button ${status === 1 ? 'open__button' : 'close__button'}`}>
                <span>+ Experience</span>
            </button>
        </>
    )
}