import { appModel } from "../../../../../main";
import { State } from "../../../state/State"

export const ColorSide = ({ id }) => {
    const color = State(appModel.resume.styles.colors.head.getState());
    Object.assign(appModel.settings.container.parameters.states.layoutColor, { [id]: color })
    return (
        <>
            <div className="color__side" style={{ backgroundColor: color.getState() }}>

            </div>
        </>
    )
}