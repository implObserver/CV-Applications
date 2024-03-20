import { Input } from "../../input/Input"
import { Area } from "../../input/TextArea"

export const ImaginaryInput = ({ props, parameters, id }) => {
    return (
        <>
            {(() => {
                if (parameters.id === `${id}-description`) {
                    return <Area props={props} parameters={parameters} id={id}></Area>
                } else {
                    return <Input props={props} parameters={parameters}></Input>
                }
            })()}
        </>
    )
}