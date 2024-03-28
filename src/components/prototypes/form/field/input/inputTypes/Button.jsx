import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";

export const Button = ({ parameters, onClick }) => {
    const props = usePropsContext();

    return (
        <>
            <input
                type={parameters.type}
                id={`${props.id} ${parameters.id}`}
                name={parameters.name}
                className={parameters.className}
                value={parameters.value}
                onClick={onClick}
            />
        </>
    )
}