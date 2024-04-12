import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";
import { Input } from "../inputTypes/Input"
import { Area } from "../inputTypes/TextArea"

export const ImaginaryInput = () => {
    const parameters = useFieldContext();
    const description = /description/;

    return (
        <>
            {(() => {
                if (parameters.field.id.match(description)) {
                    return <Area></Area>
                } else {
                    return <Input></Input>
                }
            })()}
        </>
    )
}