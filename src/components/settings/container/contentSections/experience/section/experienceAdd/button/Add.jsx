export const ExperienceAddButton = ({ setForm, status, form }) => {
    return (
        <>
            <button className={`experience__add__button ${status === 1 ? 'open__button' : 'close__button'}`}
                onClick={() => {
                    setForm(true);
                    form.changeVisibleFields();
                }}>
                <span>+ Experience</span>
            </button>
        </>
    )
}