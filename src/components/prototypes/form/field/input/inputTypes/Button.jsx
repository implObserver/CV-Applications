export const Button = ({ id, parameters, onClick }) => {
    return (
        <>
            <input
                type={parameters.type}
                id={`${id} ${parameters.id}`}
                name={parameters.name}
                className={parameters.className}
                value={parameters.value}
                onClick={onClick}
            />
        </>
    )
}