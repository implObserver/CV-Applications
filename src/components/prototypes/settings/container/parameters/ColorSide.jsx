import { appModel } from "../../../../../main";
import { State } from "../../../state/State"

export const ColorSide = ({ id }) => {
    const color = State('#ffa500');
    Object.assign(appModel.settings.container.parameters.styles.colors.layoutColor, { [id]: color });
    return (
        <>
            <div
                className="color__side"
                style={{ backgroundColor: color.getState() }}>
            </div>
        </>
    )
}