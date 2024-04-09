import { Props } from "../../../../dataManagments/props/Global"
import { State } from "../../../state/State"

export const ColorSide = ({ id }) => {
    const color = State(Props.states.resumeUpdater.colorTheme.head.getState());
    Object.assign(Props.states.parameters.states.layoutColor, { [id]: color })
    return (
        <>
            <div className="color__side" style={{ backgroundColor: color.getState() }}>

            </div>
        </>
    )
}