import { Props } from "../../../../../../../dataManagments/props/Global"
import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Right = () => {
    const clickHandler = () => {
        Props.states.resumeUpdater.resumeLayout.setState('right__layout__areas');
    }

    return (
        <>
            <div className="right__layout"
                onClick={clickHandler}>
                <WhiteSide></WhiteSide>
                <ColorSide id={'right'}></ColorSide>
            </div>
        </>
    )
}