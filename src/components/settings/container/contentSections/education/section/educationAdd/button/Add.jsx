export const EducationAddButton = ({ setForm, status, form }) => {
    return (
        <>
            <button className={`education__add__button ${status === 1 ? 'open__button' : 'close__button'}`}
                onClick={() => {
                    setForm(true);
                    form.changeVisibleFields();
                }}>
                <span>+ Education</span>
            </button>
        </>
    )
}