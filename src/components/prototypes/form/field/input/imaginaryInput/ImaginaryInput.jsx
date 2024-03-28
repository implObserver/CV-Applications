import { Props } from "../../../../../dataManagments/props/Global";
import { Input } from "../inputTypes/Input"
import { Area } from "../inputTypes/TextArea"

export const ImaginaryInput = ({ parameters, id }) => {
    const props = Props.states[id];
    return (
        <>
            {(() => {
                if (parameters.id === `${id}-description`) {
                    return <Area props={props} parameters={parameters} id={id}></Area>
                } else {
                    return <Input props={props} parameters={parameters} id={id}></Input>
                }
            })()}
        </>
    )
}